import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SYNC_DOCUMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteSyncDocumentPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncDocumentSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSyncDocumentRequest:
    path_params: DeleteSyncDocumentPathParams = dataclasses.field()
    security: DeleteSyncDocumentSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSyncDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
