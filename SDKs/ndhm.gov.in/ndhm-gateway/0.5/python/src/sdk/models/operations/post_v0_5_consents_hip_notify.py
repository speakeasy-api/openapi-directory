import dataclasses
from typing import Optional
from ..shared import hipconsentnotification as shared_hipconsentnotification
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentsHipNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentsHipNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hip_consent_notification: Optional[shared_hipconsentnotification.HipConsentNotification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentsHipNotifyRequest:
    headers: PostV05ConsentsHipNotifyHeaders = dataclasses.field()
    request: PostV05ConsentsHipNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05ConsentsHipNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
