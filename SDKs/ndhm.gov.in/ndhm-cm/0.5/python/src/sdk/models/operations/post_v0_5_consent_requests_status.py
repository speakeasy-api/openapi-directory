import dataclasses
from typing import Optional
from ..shared import consentrequeststatusrequest as shared_consentrequeststatusrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05ConsentRequestsStatusHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsStatusRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_request_status_request: Optional[shared_consentrequeststatusrequest.ConsentRequestStatusRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsStatusRequest:
    headers: PostV05ConsentRequestsStatusHeaders = dataclasses.field()
    request: PostV05ConsentRequestsStatusRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05ConsentRequestsStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
