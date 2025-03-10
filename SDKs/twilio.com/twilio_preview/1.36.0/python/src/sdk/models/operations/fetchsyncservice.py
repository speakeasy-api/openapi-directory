from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchSyncServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSyncServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSyncServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSyncServicePathParams = field(default=None)
    security: FetchSyncServiceSecurity = field(default=None)
    

@dataclass
class FetchSyncServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preview_sync_service: Optional[shared.PreviewSyncService] = field(default=None)
    
