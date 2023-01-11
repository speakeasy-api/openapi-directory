import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_routetypesresponse as shared_v3_routetypesresponse


@dataclasses.dataclass
class RouteTypesGetRouteTypesQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RouteTypesGetRouteTypesRequest:
    query_params: RouteTypesGetRouteTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RouteTypesGetRouteTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_route_types_response: Optional[shared_v3_routetypesresponse.V3RouteTypesResponse] = dataclasses.field(default=None)
    
