import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errorresponseobject as shared_errorresponseobject
from ..shared import privateuserobject as shared_privateuserobject


@dataclasses.dataclass
class EndpointGetCurrentUsersProfileHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EndpointGetCurrentUsersProfileSecurity:
    spotify_auth: shared_security.SchemeSpotifyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EndpointGetCurrentUsersProfileRequest:
    headers: EndpointGetCurrentUsersProfileHeaders = dataclasses.field()
    security: EndpointGetCurrentUsersProfileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EndpointGetCurrentUsersProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_object: Optional[shared_errorresponseobject.ErrorResponseObject] = dataclasses.field(default=None)
    private_user_object: Optional[shared_privateuserobject.PrivateUserObject] = dataclasses.field(default=None)
    
