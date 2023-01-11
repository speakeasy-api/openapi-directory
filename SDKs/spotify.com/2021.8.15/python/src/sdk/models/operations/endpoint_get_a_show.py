import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import showobject as shared_showobject


@dataclasses.dataclass
class EndpointGetAShowPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAShowQueryParams:
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetAShowHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAShowSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetAShowRequest:
    headers: EndpointGetAShowHeaders = dataclasses.field()
    path_params: EndpointGetAShowPathParams = dataclasses.field()
    query_params: EndpointGetAShowQueryParams = dataclasses.field()
    security: EndpointGetAShowSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAShowResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    show_object: Optional[shared_showobject.ShowObject] = dataclasses.field(default=None)
    
