import dataclasses
from typing import Optional
from enum import Enum
from ..shared import v3_disruptionsresponse as shared_v3_disruptionsresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class DisruptionsGetDisruptionsByRouteAndStopPathParams:
    route_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    stop_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'stop_id', 'style': 'simple', 'explode': False }})
    
class DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum(str, Enum):
    CURRENT = "current"
    PLANNED = "planned"


@dataclasses.dataclass
class DisruptionsGetDisruptionsByRouteAndStopQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    disruption_status: Optional[DisruptionsGetDisruptionsByRouteAndStopDisruptionStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'disruption_status', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DisruptionsGetDisruptionsByRouteAndStopRequest:
    path_params: DisruptionsGetDisruptionsByRouteAndStopPathParams = dataclasses.field()
    query_params: DisruptionsGetDisruptionsByRouteAndStopQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DisruptionsGetDisruptionsByRouteAndStopResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_disruptions_response: Optional[shared_v3_disruptionsresponse.V3DisruptionsResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
