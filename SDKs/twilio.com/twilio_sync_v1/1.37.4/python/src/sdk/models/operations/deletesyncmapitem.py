import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SYNC_MAP_ITEM_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class DeleteSyncMapItemPathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Key', 'style': 'simple', 'explode': False }})
    map_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncMapItemHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncMapItemSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSyncMapItemRequest:
    headers: DeleteSyncMapItemHeaders = dataclasses.field()
    path_params: DeleteSyncMapItemPathParams = dataclasses.field()
    security: DeleteSyncMapItemSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSyncMapItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
