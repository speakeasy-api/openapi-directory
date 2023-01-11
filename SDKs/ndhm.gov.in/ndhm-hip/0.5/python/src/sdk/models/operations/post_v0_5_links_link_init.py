import dataclasses
from typing import Optional
from ..shared import patientlinkreferencerequest as shared_patientlinkreferencerequest
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_LINKS_LINK_INIT_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclasses.dataclass
class PostV05LinksLinkInitHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05LinksLinkInitRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_reference_request: Optional[shared_patientlinkreferencerequest.PatientLinkReferenceRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05LinksLinkInitRequest:
    headers: PostV05LinksLinkInitHeaders = dataclasses.field()
    request: PostV05LinksLinkInitRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05LinksLinkInitResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
