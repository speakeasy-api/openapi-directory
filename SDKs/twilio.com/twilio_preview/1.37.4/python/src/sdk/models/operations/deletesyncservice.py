import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SYNC_SERVICE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteSyncServicePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSyncServiceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSyncServiceRequest:
    path_params: DeleteSyncServicePathParams = dataclasses.field()
    security: DeleteSyncServiceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSyncServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
