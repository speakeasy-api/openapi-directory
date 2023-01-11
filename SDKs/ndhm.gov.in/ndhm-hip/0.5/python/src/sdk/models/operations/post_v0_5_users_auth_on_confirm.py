import dataclasses
from typing import Optional
from ..shared import patientauthconfirmresponse as shared_patientauthconfirmresponse
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_USERS_AUTH_ON_CONFIRM_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclasses.dataclass
class PostV05UsersAuthOnConfirmHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05UsersAuthOnConfirmRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_confirm_response: Optional[shared_patientauthconfirmresponse.PatientAuthConfirmResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05UsersAuthOnConfirmRequest:
    headers: PostV05UsersAuthOnConfirmHeaders = dataclasses.field()
    request: PostV05UsersAuthOnConfirmRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05UsersAuthOnConfirmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
