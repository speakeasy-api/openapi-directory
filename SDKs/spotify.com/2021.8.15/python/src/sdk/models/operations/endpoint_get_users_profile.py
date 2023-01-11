import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import publicuserobject as shared_publicuserobject


@dataclasses.dataclass
class EndpointGetUsersProfilePathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetUsersProfileHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetUsersProfileSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetUsersProfileRequest:
    headers: EndpointGetUsersProfileHeaders = dataclasses.field()
    path_params: EndpointGetUsersProfilePathParams = dataclasses.field()
    security: EndpointGetUsersProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetUsersProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    public_user_object: Optional[shared_publicuserobject.PublicUserObject] = dataclasses.field(default=None)
    
