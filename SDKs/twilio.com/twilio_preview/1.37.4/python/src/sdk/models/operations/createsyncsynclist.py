import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_list as shared_preview_sync_service_sync_list


CREATE_SYNC_SYNC_LIST_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateSyncSyncListPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncSyncListCreateSyncSyncListRequest:
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateSyncSyncListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncSyncListRequest:
    path_params: CreateSyncSyncListPathParams = dataclasses.field()
    security: CreateSyncSyncListSecurity = dataclasses.field()
    request: Optional[CreateSyncSyncListCreateSyncSyncListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncSyncListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_list: Optional[shared_preview_sync_service_sync_list.PreviewSyncServiceSyncList] = dataclasses.field(default=None)
    
