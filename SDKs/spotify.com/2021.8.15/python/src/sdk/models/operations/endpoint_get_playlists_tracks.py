import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import playlisttrackobject as shared_playlisttrackobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetPlaylistsTracksPathParams:
    playlist_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetPlaylistsTracksQueryParams:
    additional_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    market: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetPlaylistsTracksHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetPlaylistsTracksSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointGetPlaylistsTracks200ApplicationJSON:
    r"""EndpointGetPlaylistsTracks200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[list[shared_playlisttrackobject.PlaylistTrackObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class EndpointGetPlaylistsTracksRequest:
    headers: EndpointGetPlaylistsTracksHeaders = dataclasses.field()
    path_params: EndpointGetPlaylistsTracksPathParams = dataclasses.field()
    query_params: EndpointGetPlaylistsTracksQueryParams = dataclasses.field()
    security: EndpointGetPlaylistsTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetPlaylistsTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    endpoint_get_playlists_tracks_200_application_json_object: Optional[EndpointGetPlaylistsTracks200ApplicationJSON] = dataclasses.field(default=None)
    
