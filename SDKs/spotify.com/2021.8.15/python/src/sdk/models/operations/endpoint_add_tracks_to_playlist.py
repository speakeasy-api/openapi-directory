import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import snapshotidobject as shared_snapshotidobject


@dataclasses.dataclass
class EndpointAddTracksToPlaylistPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointAddTracksToPlaylistQueryParams:
    position: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    uris: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointAddTracksToPlaylistHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointAddTracksToPlaylistRequestBody:
    position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    

@dataclasses.dataclass
class EndpointAddTracksToPlaylistSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointAddTracksToPlaylistRequest:
    headers: EndpointAddTracksToPlaylistHeaders = dataclasses.field()
    path_params: EndpointAddTracksToPlaylistPathParams = dataclasses.field()
    query_params: EndpointAddTracksToPlaylistQueryParams = dataclasses.field()
    security: EndpointAddTracksToPlaylistSecurity = dataclasses.field()
    request: Optional[EndpointAddTracksToPlaylistRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EndpointAddTracksToPlaylistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    snapshot_id_object: Optional[shared_snapshotidobject.SnapshotIDObject] = dataclasses.field(default=None)
    
