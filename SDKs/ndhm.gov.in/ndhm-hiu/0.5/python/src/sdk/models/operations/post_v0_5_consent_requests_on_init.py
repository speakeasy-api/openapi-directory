import dataclasses
from typing import Optional
from ..shared import consentrequestinitresponse as shared_consentrequestinitresponse
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_CONSENT_REQUESTS_ON_INIT_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05ConsentRequestsOnInitHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsOnInitRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_request_init_response: Optional[shared_consentrequestinitresponse.ConsentRequestInitResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsOnInitRequest:
    headers: PostV05ConsentRequestsOnInitHeaders = dataclasses.field()
    request: PostV05ConsentRequestsOnInitRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05ConsentRequestsOnInitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
