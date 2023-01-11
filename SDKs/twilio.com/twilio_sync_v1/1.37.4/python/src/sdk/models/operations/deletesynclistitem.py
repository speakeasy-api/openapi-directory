import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SYNC_LIST_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class DeleteSyncListItemPathParams:
    index: int = dataclasses.field(metadata={'path_param': { 'field_name': 'Index', 'style': 'simple', 'explode': False }})
    list_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ListSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncListItemHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncListItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSyncListItemRequest:
    headers: DeleteSyncListItemHeaders = dataclasses.field()
    path_params: DeleteSyncListItemPathParams = dataclasses.field()
    security: DeleteSyncListItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSyncListItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
