import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import playlistobject as shared_playlistobject


@dataclasses.dataclass
class EndpointCreatePlaylistPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointCreatePlaylistHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointCreatePlaylistRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    collaborative: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborative') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclasses.dataclass
class EndpointCreatePlaylistSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointCreatePlaylistRequest:
    headers: EndpointCreatePlaylistHeaders = dataclasses.field()
    path_params: EndpointCreatePlaylistPathParams = dataclasses.field()
    request: EndpointCreatePlaylistRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointCreatePlaylistSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointCreatePlaylistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    playlist_object: Optional[shared_playlistobject.PlaylistObject] = dataclasses.field(default=None)
    
