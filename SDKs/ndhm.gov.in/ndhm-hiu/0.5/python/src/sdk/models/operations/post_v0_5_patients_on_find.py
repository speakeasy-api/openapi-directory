import dataclasses
from typing import Optional
from ..shared import patientidentificationresponse as shared_patientidentificationresponse
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_PATIENTS_ON_FIND_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05PatientsOnFindHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05PatientsOnFindRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_identification_response: Optional[shared_patientidentificationresponse.PatientIdentificationResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05PatientsOnFindRequest:
    headers: PostV05PatientsOnFindHeaders = dataclasses.field()
    request: PostV05PatientsOnFindRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05PatientsOnFindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
