import dataclasses
from typing import Optional
from ..shared import patientauthinitrequest as shared_patientauthinitrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05UsersAuthInitHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05UsersAuthInitRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_init_request: Optional[shared_patientauthinitrequest.PatientAuthInitRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05UsersAuthInitRequest:
    headers: PostV05UsersAuthInitHeaders = dataclasses.field()
    request: PostV05UsersAuthInitRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05UsersAuthInitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
