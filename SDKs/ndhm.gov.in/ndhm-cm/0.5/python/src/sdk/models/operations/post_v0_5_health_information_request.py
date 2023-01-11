import dataclasses
from typing import Optional
from ..shared import hirequest as shared_hirequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PostV05HealthInformationRequestHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05HealthInformationRequestRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hi_request: Optional[shared_hirequest.HiRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05HealthInformationRequestRequest:
    headers: PostV05HealthInformationRequestHeaders = dataclasses.field()
    request: PostV05HealthInformationRequestRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostV05HealthInformationRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
