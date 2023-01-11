import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_ip_access_control_list as shared_trunking_v1_trunk_ip_access_control_list


CREATE_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class CreateIPAccessControlListPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateIPAccessControlListCreateIPAccessControlListRequest:
    ip_access_control_list_sid: str = dataclasses.field(metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclasses.dataclass
class CreateIPAccessControlListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateIPAccessControlListRequest:
    path_params: CreateIPAccessControlListPathParams = dataclasses.field()
    security: CreateIPAccessControlListSecurity = dataclasses.field()
    request: Optional[CreateIPAccessControlListCreateIPAccessControlListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateIPAccessControlListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trunking_v1_trunk_ip_access_control_list: Optional[shared_trunking_v1_trunk_ip_access_control_list.TrunkingV1TrunkIPAccessControlList] = dataclasses.field(default=None)
    
