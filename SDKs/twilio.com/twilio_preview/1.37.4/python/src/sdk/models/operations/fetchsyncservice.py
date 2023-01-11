import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service as shared_preview_sync_service


FETCH_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncServiceRequest:
    path_params: FetchSyncServicePathParams = dataclasses.field()
    security: FetchSyncServiceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service: Optional[shared_preview_sync_service.PreviewSyncService] = dataclasses.field(default=None)
    
