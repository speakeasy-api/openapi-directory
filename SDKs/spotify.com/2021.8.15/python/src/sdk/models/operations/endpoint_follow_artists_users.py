import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointFollowArtistsUsersQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointFollowArtistsUsersHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EndpointFollowArtistsUsersRequestBody:
    ids: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclasses.dataclass
class EndpointFollowArtistsUsersSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointFollowArtistsUsersRequest:
    headers: EndpointFollowArtistsUsersHeaders = dataclasses.field()
    query_params: EndpointFollowArtistsUsersQueryParams = dataclasses.field()
    request: EndpointFollowArtistsUsersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointFollowArtistsUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointFollowArtistsUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    
