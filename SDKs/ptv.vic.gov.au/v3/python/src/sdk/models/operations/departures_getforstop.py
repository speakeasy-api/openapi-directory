import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import v3_departuresresponse as shared_v3_departuresresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class DeparturesGetForStopPathParams:
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    stop_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'stop_id', 'style': 'simple', 'explode': False }})
    
class DeparturesGetForStopExpandEnum(str, Enum):
    ALL = "All"
    STOP = "Stop"
    ROUTE = "Route"
    RUN = "Run"
    DIRECTION = "Direction"
    DISRUPTION = "Disruption"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclasses.dataclass
class DeparturesGetForStopQueryParams:
    date_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    direction_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction_id', 'style': 'form', 'explode': True }})
    expand: Optional[list[DeparturesGetForStopExpandEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    gtfs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gtfs', 'style': 'form', 'explode': True }})
    include_cancelled: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_cancelled', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    look_backwards: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'look_backwards', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    platform_numbers: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platform_numbers', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeparturesGetForStopRequest:
    path_params: DeparturesGetForStopPathParams = dataclasses.field()
    query_params: DeparturesGetForStopQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeparturesGetForStopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_departures_response: Optional[shared_v3_departuresresponse.V3DeparturesResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
