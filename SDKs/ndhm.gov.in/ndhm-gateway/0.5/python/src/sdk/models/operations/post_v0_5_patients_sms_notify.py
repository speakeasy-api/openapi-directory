import dataclasses
from typing import Optional
from ..shared import patientsmsnotifcationrequest as shared_patientsmsnotifcationrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05PatientsSmsNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05PatientsSmsNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_sms_notifcation_request: Optional[shared_patientsmsnotifcationrequest.PatientSmsNotifcationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05PatientsSmsNotifyRequest:
    headers: PostV05PatientsSmsNotifyHeaders = dataclasses.field()
    request: PostV05PatientsSmsNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05PatientsSmsNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
