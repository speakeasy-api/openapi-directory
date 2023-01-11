import dataclasses
from typing import Optional
from ..shared import patientsmsnotifcationresponse as shared_patientsmsnotifcationresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05PatientsSmsOnNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05PatientsSmsOnNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_sms_notifcation_response: Optional[shared_patientsmsnotifcationresponse.PatientSmsNotifcationResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05PatientsSmsOnNotifyRequest:
    headers: PostV05PatientsSmsOnNotifyHeaders = dataclasses.field()
    request: PostV05PatientsSmsOnNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05PatientsSmsOnNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
