import dataclasses
from typing import Optional
from ..shared import v3_directionsresponse as shared_v3_directionsresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class DirectionsForDirectionAndTypePathParams:
    direction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'direction_id', 'style': 'simple', 'explode': False }})
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DirectionsForDirectionAndTypeQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DirectionsForDirectionAndTypeRequest:
    path_params: DirectionsForDirectionAndTypePathParams = dataclasses.field()
    query_params: DirectionsForDirectionAndTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DirectionsForDirectionAndTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_directions_response: Optional[shared_v3_directionsresponse.V3DirectionsResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
