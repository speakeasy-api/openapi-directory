import dataclasses
from typing import Optional
from ..shared import hipconsentnotificationresponse as shared_hipconsentnotificationresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentsHipOnNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsHipOnNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hip_consent_notification_response: Optional[shared_hipconsentnotificationresponse.HipConsentNotificationResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentsHipOnNotifyRequest:
    headers: PostV05ConsentsHipOnNotifyHeaders = dataclasses.field()
    request: PostV05ConsentsHipOnNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05ConsentsHipOnNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
