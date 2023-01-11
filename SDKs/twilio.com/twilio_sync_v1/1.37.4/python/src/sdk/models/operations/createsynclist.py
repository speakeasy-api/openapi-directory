import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import sync_v1_service_sync_list as shared_sync_v1_service_sync_list


CREATE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class CreateSyncListPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncListCreateSyncListRequest:
    collection_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CollectionTtl' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateSyncListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncListRequest:
    path_params: CreateSyncListPathParams = dataclasses.field()
    security: CreateSyncListSecurity = dataclasses.field()
    request: Optional[CreateSyncListCreateSyncListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sync_v1_service_sync_list: Optional[shared_sync_v1_service_sync_list.SyncV1ServiceSyncList] = dataclasses.field(default=None)
    
