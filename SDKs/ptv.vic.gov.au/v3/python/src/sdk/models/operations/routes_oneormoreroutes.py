import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_routeresponse as shared_v3_routeresponse


@dataclasses.dataclass
class RoutesOneOrMoreRoutesQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    route_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'route_name', 'style': 'form', 'explode': True }})
    route_types: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RoutesOneOrMoreRoutesRequest:
    query_params: RoutesOneOrMoreRoutesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RoutesOneOrMoreRoutesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_route_response: Optional[shared_v3_routeresponse.V3RouteResponse] = dataclasses.field(default=None)
    
