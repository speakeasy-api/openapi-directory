import dataclasses
from typing import Optional
from ..shared import v3_directionsresponse as shared_v3_directionsresponse
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class DirectionsForRoutePathParams:
    route_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DirectionsForRouteQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DirectionsForRouteRequest:
    path_params: DirectionsForRoutePathParams = dataclasses.field()
    query_params: DirectionsForRouteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DirectionsForRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_directions_response: Optional[shared_v3_directionsresponse.V3DirectionsResponse] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    
