import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_sync_service_sync_list_sync_list_item as shared_preview_sync_service_sync_list_sync_list_item


UPDATE_SYNC_SYNC_LIST_ITEM_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateSyncSyncListItemPathParams:
    index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncSyncListItemHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSyncSyncListItemUpdateSyncSyncListItemRequest:
    data: Any = dataclasses.field(metadata={'form': { 'field_name': 'Data' }})
    

@dataclasses.dataclass
class UpdateSyncSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSyncSyncListItemRequest:
    headers: UpdateSyncSyncListItemHeaders = dataclasses.field()
    path_params: UpdateSyncSyncListItemPathParams = dataclasses.field()
    security: UpdateSyncSyncListItemSecurity = dataclasses.field()
    request: Optional[UpdateSyncSyncListItemUpdateSyncSyncListItemRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSyncSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_sync_service_sync_list_sync_list_item: Optional[shared_preview_sync_service_sync_list_sync_list_item.PreviewSyncServiceSyncListSyncListItem] = dataclasses.field(default=None)
    
