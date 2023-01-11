import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SYNC_LIST_SERVERS = [
	"https://sync.twilio.com",
]


@dataclasses.dataclass
class DeleteSyncListPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSyncListRequest:
    path_params: DeleteSyncListPathParams = dataclasses.field()
    security: DeleteSyncListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSyncListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
