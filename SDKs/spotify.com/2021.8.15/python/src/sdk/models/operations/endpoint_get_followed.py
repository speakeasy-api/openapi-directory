import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import followingartistsobject as shared_followingartistsobject


@dataclasses.dataclass
class EndpointGetFollowedQueryParams:
    type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetFollowedHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetFollowedSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetFollowedRequest:
    headers: EndpointGetFollowedHeaders = dataclasses.field()
    query_params: EndpointGetFollowedQueryParams = dataclasses.field()
    security: EndpointGetFollowedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetFollowedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    following_artists_object: Optional[shared_followingartistsobject.FollowingArtistsObject] = dataclasses.field(default=None)
    
