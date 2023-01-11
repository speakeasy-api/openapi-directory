import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class DeleteNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteNetworkAccessProfileNetworkRequest:
    path_params: DeleteNetworkAccessProfileNetworkPathParams = dataclasses.field()
    security: DeleteNetworkAccessProfileNetworkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteNetworkAccessProfileNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
