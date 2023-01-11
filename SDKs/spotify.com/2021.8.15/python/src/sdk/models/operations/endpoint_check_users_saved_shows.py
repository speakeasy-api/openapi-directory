import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject


@dataclasses.dataclass
class EndpointCheckUsersSavedShowsQueryParams:
    ids: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EndpointCheckUsersSavedShowsHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointCheckUsersSavedShowsSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointCheckUsersSavedShowsRequest:
    headers: EndpointCheckUsersSavedShowsHeaders = dataclasses.field()
    query_params: EndpointCheckUsersSavedShowsQueryParams = dataclasses.field()
    security: EndpointCheckUsersSavedShowsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointCheckUsersSavedShowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    endpoint_check_users_saved_shows_200_application_json_booleans: Optional[list[bool]] = dataclasses.field(default=None)
    
