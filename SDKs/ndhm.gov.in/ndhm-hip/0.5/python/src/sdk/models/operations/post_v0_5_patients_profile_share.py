import dataclasses
from typing import Optional
from ..shared import shareprofilerequest as shared_shareprofilerequest
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_PATIENTS_PROFILE_SHARE_SERVERS = [
	"https://your-hrp-server.com",
]


@dataclasses.dataclass
class PostV05PatientsProfileShareHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05PatientsProfileShareRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    share_profile_request: Optional[shared_shareprofilerequest.ShareProfileRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05PatientsProfileShareRequest:
    headers: PostV05PatientsProfileShareHeaders = dataclasses.field()
    request: PostV05PatientsProfileShareRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05PatientsProfileShareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
