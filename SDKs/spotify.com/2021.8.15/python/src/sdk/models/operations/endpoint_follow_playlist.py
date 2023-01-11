import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointFollowPlaylistPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointFollowPlaylistHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointFollowPlaylistRequestBody:
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclasses.dataclass
class EndpointFollowPlaylistSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointFollowPlaylistRequest:
    headers: EndpointFollowPlaylistHeaders = dataclasses.field()
    path_params: EndpointFollowPlaylistPathParams = dataclasses.field()
    security: EndpointFollowPlaylistSecurity = dataclasses.field()
    request: Optional[EndpointFollowPlaylistRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EndpointFollowPlaylistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
