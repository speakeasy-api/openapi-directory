import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_ip_access_control_list as shared_api_v2010_account_sip_sip_ip_access_control_list


UPDATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateSipIPAccessControlListPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSipIPAccessControlListUpdateSipIPAccessControlListRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateSipIPAccessControlListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSipIPAccessControlListRequest:
    path_params: UpdateSipIPAccessControlListPathParams = dataclasses.field()
    security: UpdateSipIPAccessControlListSecurity = dataclasses.field()
    request: Optional[UpdateSipIPAccessControlListUpdateSipIPAccessControlListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSipIPAccessControlListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_ip_access_control_list: Optional[shared_api_v2010_account_sip_sip_ip_access_control_list.APIV2010AccountSipSipIPAccessControlList] = dataclasses.field(default=None)
    
