import dataclasses
from typing import Optional
from ..shared import consentrequest as shared_consentrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentRequestsInitHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsInitRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_request: Optional[shared_consentrequest.ConsentRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsInitRequest:
    headers: PostV05ConsentRequestsInitHeaders = dataclasses.field()
    request: PostV05ConsentRequestsInitRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05ConsentRequestsInitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
