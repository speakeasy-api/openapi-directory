import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import simplifiedplaylistobject as shared_simplifiedplaylistobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetAListOfCurrentUsersPlaylistsQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetAListOfCurrentUsersPlaylistsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetAListOfCurrentUsersPlaylistsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON:
    r"""EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[list[shared_simplifiedplaylistobject.SimplifiedPlaylistObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class EndpointGetAListOfCurrentUsersPlaylistsRequest:
    headers: EndpointGetAListOfCurrentUsersPlaylistsHeaders = dataclasses.field()
    query_params: EndpointGetAListOfCurrentUsersPlaylistsQueryParams = dataclasses.field()
    security: EndpointGetAListOfCurrentUsersPlaylistsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetAListOfCurrentUsersPlaylistsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    endpoint_get_a_list_of_current_users_playlists_200_application_json_object: Optional[EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON] = dataclasses.field(default=None)
    
