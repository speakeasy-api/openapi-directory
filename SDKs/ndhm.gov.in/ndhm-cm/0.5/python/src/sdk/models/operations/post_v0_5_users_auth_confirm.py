import dataclasses
from typing import Optional
from ..shared import patientauthconfirmrequest as shared_patientauthconfirmrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05UsersAuthConfirmHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05UsersAuthConfirmRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_confirm_request: Optional[shared_patientauthconfirmrequest.PatientAuthConfirmRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05UsersAuthConfirmRequest:
    headers: PostV05UsersAuthConfirmHeaders = dataclasses.field()
    request: PostV05UsersAuthConfirmRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05UsersAuthConfirmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
