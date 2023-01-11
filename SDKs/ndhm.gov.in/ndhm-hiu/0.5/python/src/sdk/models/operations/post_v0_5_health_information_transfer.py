import dataclasses
from typing import Optional
from ..shared import datanotification as shared_datanotification
from ..shared import errorresponse as shared_errorresponse


POST_V0_5_HEALTH_INFORMATION_TRANSFER_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclasses.dataclass
class PostV05HealthInformationTransferHeaders:
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostV05HealthInformationTransferRequests:
    application_xml: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/xml' }})
    data_notification: Optional[shared_datanotification.DataNotification] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostV05HealthInformationTransferRequest:
    headers: PostV05HealthInformationTransferHeaders = dataclasses.field()
    request: PostV05HealthInformationTransferRequests = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostV05HealthInformationTransferResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
