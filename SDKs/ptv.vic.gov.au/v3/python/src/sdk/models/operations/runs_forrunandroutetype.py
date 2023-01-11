import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_runresponse as shared_v3_runresponse


@dataclasses.dataclass
class RunsForRunAndRouteTypePathParams:
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    run_ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'run_ref', 'style': 'simple', 'explode': False }})
    
class RunsForRunAndRouteTypeExpandEnum(str, Enum):
    ALL = "All"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclasses.dataclass
class RunsForRunAndRouteTypeQueryParams:
    expand: list[RunsForRunAndRouteTypeExpandEnum] = dataclasses.field(metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    date_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RunsForRunAndRouteTypeRequest:
    path_params: RunsForRunAndRouteTypePathParams = dataclasses.field()
    query_params: RunsForRunAndRouteTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RunsForRunAndRouteTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_run_response: Optional[shared_v3_runresponse.V3RunResponse] = dataclasses.field(default=None)
    
