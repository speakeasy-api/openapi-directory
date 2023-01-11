import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import artistobject as shared_artistobject
from ..shared import trackobject as shared_trackobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracksPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracksQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    time_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_range', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracksHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracksSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracks200ApplicationJSON:
    r"""EndpointGetUsersTopArtistsAndTracks200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracksRequest:
    headers: EndpointGetUsersTopArtistsAndTracksHeaders = dataclasses.field()
    path_params: EndpointGetUsersTopArtistsAndTracksPathParams = dataclasses.field()
    query_params: EndpointGetUsersTopArtistsAndTracksQueryParams = dataclasses.field()
    security: EndpointGetUsersTopArtistsAndTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetUsersTopArtistsAndTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    endpoint_get_users_top_artists_and_tracks_200_application_json_object: Optional[EndpointGetUsersTopArtistsAndTracks200ApplicationJSON] = dataclasses.field(default=None)
    
