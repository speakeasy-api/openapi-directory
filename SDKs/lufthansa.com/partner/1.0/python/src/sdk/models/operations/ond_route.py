import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OndRoutePathParams:
    destination: str = dataclasses.field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = dataclasses.field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OndRouteQueryParams:
    catalogues: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OndRouteHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OndRouteSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OndRouteRequest:
    headers: OndRouteHeaders = dataclasses.field()
    path_params: OndRoutePathParams = dataclasses.field()
    query_params: OndRouteQueryParams = dataclasses.field()
    security: OndRouteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OndRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ond_route_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
