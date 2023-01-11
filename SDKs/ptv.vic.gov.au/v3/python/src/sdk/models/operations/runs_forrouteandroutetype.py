import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_runsresponse as shared_v3_runsresponse


@dataclasses.dataclass
class RunsForRouteAndRouteTypePathParams:
    route_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    
class RunsForRouteAndRouteTypeExpandEnum(str, Enum):
    ALL = "All"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclasses.dataclass
class RunsForRouteAndRouteTypeQueryParams:
    expand: list[RunsForRouteAndRouteTypeExpandEnum] = dataclasses.field(metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    date_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RunsForRouteAndRouteTypeRequest:
    path_params: RunsForRouteAndRouteTypePathParams = dataclasses.field()
    query_params: RunsForRouteAndRouteTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RunsForRouteAndRouteTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_runs_response: Optional[shared_v3_runsresponse.V3RunsResponse] = dataclasses.field(default=None)
    
