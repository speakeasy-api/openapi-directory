import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import cursorobject as shared_cursorobject
from ..shared import playhistoryobject as shared_playhistoryobject
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointGetRecentlyPlayedQueryParams:
    after: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointGetRecentlyPlayedHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetRecentlyPlayedSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointGetRecentlyPlayed200ApplicationJSON:
    r"""EndpointGetRecentlyPlayed200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
    """
    
    cursors: Optional[shared_cursorobject.CursorObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursors') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[list[shared_playhistoryobject.PlayHistoryObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class EndpointGetRecentlyPlayedRequest:
    headers: EndpointGetRecentlyPlayedHeaders = dataclasses.field()
    query_params: EndpointGetRecentlyPlayedQueryParams = dataclasses.field()
    security: EndpointGetRecentlyPlayedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetRecentlyPlayedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    endpoint_get_recently_played_200_application_json_object: Optional[EndpointGetRecentlyPlayed200ApplicationJSON] = dataclasses.field(default=None)
    
