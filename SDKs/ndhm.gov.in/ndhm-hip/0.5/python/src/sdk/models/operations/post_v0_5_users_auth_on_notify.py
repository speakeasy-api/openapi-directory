import dataclasses
from typing import Optional
from ..shared import patientauthnotificationacknowledgement as shared_patientauthnotificationacknowledgement
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05UsersAuthOnNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05UsersAuthOnNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_auth_notification_acknowledgement: Optional[shared_patientauthnotificationacknowledgement.PatientAuthNotificationAcknowledgement] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05UsersAuthOnNotifyRequest:
    headers: PostV05UsersAuthOnNotifyHeaders = dataclasses.field()
    request: PostV05UsersAuthOnNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05UsersAuthOnNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
