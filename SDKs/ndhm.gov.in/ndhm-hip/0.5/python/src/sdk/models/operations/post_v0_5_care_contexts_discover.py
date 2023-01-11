import dataclasses
from typing import Optional
from ..shared import patientdiscoveryrequest as shared_patientdiscoveryrequest
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_CARE_CONTEXTS_DISCOVER_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclasses.dataclass
class PostV05CareContextsDiscoverHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05CareContextsDiscoverRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_discovery_request: Optional[shared_patientdiscoveryrequest.PatientDiscoveryRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05CareContextsDiscoverRequest:
    headers: PostV05CareContextsDiscoverHeaders = dataclasses.field()
    request: PostV05CareContextsDiscoverRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05CareContextsDiscoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
