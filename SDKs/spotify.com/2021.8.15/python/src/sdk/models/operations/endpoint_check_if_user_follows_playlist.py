import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointCheckIfUserFollowsPlaylistPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointCheckIfUserFollowsPlaylistQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointCheckIfUserFollowsPlaylistHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointCheckIfUserFollowsPlaylistSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointCheckIfUserFollowsPlaylistRequest:
    headers: EndpointCheckIfUserFollowsPlaylistHeaders = dataclasses.field()
    path_params: EndpointCheckIfUserFollowsPlaylistPathParams = dataclasses.field()
    query_params: EndpointCheckIfUserFollowsPlaylistQueryParams = dataclasses.field()
    security: EndpointCheckIfUserFollowsPlaylistSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointCheckIfUserFollowsPlaylistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    endpoint_check_if_user_follows_playlist_200_application_json_booleans: Optional[list[bool]] = dataclasses.field(default=None)
    
