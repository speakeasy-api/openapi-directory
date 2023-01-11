import dataclasses
from typing import Optional
from ..shared import hiuhealthinformationrequestresponse as shared_hiuhealthinformationrequestresponse
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_HEALTH_INFORMATION_HIU_ON_REQUEST_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05HealthInformationHiuOnRequestHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05HealthInformationHiuOnRequestRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    hiu_health_information_request_response: Optional[shared_hiuhealthinformationrequestresponse.HiuHealthInformationRequestResponse] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05HealthInformationHiuOnRequestRequest:
    headers: PostV05HealthInformationHiuOnRequestHeaders = dataclasses.field()
    request: PostV05HealthInformationHiuOnRequestRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05HealthInformationHiuOnRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
