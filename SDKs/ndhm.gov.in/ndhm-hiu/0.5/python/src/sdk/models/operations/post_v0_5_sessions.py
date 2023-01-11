import dataclasses
from typing import Optional
from ..shared import sessionrequest as shared_sessionrequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import sessionresponse as shared_sessionresponse


@dataclasses.dataclass
class PostV05SessionsRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    session_request: Optional[shared_sessionrequest.SessionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05SessionsRequest:
    request: PostV05SessionsRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05SessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    session_response: Optional[shared_sessionresponse.SessionResponse] = dataclasses.field(default=None)
    
