import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_list as shared_preview_sync_service_sync_list


FETCH_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchSyncSyncListPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSyncSyncListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSyncSyncListRequest:
    path_params: FetchSyncSyncListPathParams = dataclasses.field()
    security: FetchSyncSyncListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSyncSyncListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_list: Optional[shared_preview_sync_service_sync_list.PreviewSyncServiceSyncList] = dataclasses.field(default=None)
    
