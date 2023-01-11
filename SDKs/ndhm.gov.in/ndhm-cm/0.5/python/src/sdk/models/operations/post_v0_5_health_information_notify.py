import dataclasses
from typing import Optional
from ..shared import healthinformationnotification as shared_healthinformationnotification
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05HealthInformationNotifyHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05HealthInformationNotifyRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    health_information_notification: Optional[shared_healthinformationnotification.HealthInformationNotification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05HealthInformationNotifyRequest:
    headers: PostV05HealthInformationNotifyHeaders = dataclasses.field()
    request: PostV05HealthInformationNotifyRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05HealthInformationNotifyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
