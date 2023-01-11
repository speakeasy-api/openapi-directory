import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_credential_list as shared_api_v2010_account_sip_sip_credential_list


UPDATE_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateSipCredentialListPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSipCredentialListUpdateSipCredentialListRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateSipCredentialListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSipCredentialListRequest:
    path_params: UpdateSipCredentialListPathParams = dataclasses.field()
    security: UpdateSipCredentialListSecurity = dataclasses.field()
    request: Optional[UpdateSipCredentialListUpdateSipCredentialListRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSipCredentialListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_sip_sip_credential_list: Optional[shared_api_v2010_account_sip_sip_credential_list.APIV2010AccountSipSipCredentialList] = dataclasses.field(default=None)
    
