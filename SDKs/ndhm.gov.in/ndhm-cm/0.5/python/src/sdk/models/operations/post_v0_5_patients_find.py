import dataclasses
from typing import Optional
from ..shared import patientidentificationrequest as shared_patientidentificationrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05PatientsFindHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05PatientsFindRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_identification_request: Optional[shared_patientidentificationrequest.PatientIdentificationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05PatientsFindRequest:
    headers: PostV05PatientsFindHeaders = dataclasses.field()
    request: PostV05PatientsFindRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05PatientsFindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
