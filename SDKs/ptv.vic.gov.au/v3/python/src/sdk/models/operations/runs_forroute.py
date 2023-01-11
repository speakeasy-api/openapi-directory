import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_runsresponse as shared_v3_runsresponse


@dataclasses.dataclass
class RunsForRoutePathParams:
    route_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    
class RunsForRouteExpandEnum(str, Enum):
    ALL = "All"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclasses.dataclass
class RunsForRouteQueryParams:
    date_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    expand: Optional[list[RunsForRouteExpandEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RunsForRouteRequest:
    path_params: RunsForRoutePathParams = dataclasses.field()
    query_params: RunsForRouteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RunsForRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_runs_response: Optional[shared_v3_runsresponse.V3RunsResponse] = dataclasses.field(default=None)
    
