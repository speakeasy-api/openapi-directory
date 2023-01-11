import dataclasses
from typing import Optional
from ..shared import hiuconsentrequeststatus as shared_hiuconsentrequeststatus
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_CONSENT_REQUESTS_ON_STATUS_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05ConsentRequestsOnStatusHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsOnStatusRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_consent_request_status: Optional[shared_hiuconsentrequeststatus.HiuConsentRequestStatus] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05ConsentRequestsOnStatusRequest:
    headers: PostV05ConsentRequestsOnStatusHeaders = dataclasses.field()
    request: PostV05ConsentRequestsOnStatusRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05ConsentRequestsOnStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
