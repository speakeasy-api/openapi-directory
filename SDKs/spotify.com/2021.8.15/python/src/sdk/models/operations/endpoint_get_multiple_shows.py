import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import showsobject as shared_showsobject


@dataclasses.dataclass
class EndpointGetMultipleShowsQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetMultipleShowsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetMultipleShowsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetMultipleShowsRequest:
    headers: EndpointGetMultipleShowsHeaders = dataclasses.field()
    query_params: EndpointGetMultipleShowsQueryParams = dataclasses.field()
    security: EndpointGetMultipleShowsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetMultipleShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    shows_object: Optional[shared_showsobject.ShowsObject] = dataclasses.field(default=None)
    
