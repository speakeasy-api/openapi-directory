import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_list_sync_list_item as shared_preview_sync_service_sync_list_sync_list_item


CREATE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateSyncSyncListItemPathParams:
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSyncSyncListItemCreateSyncSyncListItemRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclasses.dataclass
class CreateSyncSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSyncSyncListItemRequest:
    path_params: CreateSyncSyncListItemPathParams = dataclasses.field()
    security: CreateSyncSyncListItemSecurity = dataclasses.field()
    request: Optional[CreateSyncSyncListItemCreateSyncSyncListItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSyncSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_list_sync_list_item: Optional[shared_preview_sync_service_sync_list_sync_list_item.PreviewSyncServiceSyncListSyncListItem] = dataclasses.field(default=None)
    
