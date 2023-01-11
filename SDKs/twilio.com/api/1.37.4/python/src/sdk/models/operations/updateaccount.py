import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import account_enum_status_enum as shared_account_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account as shared_api_v2010_account


UPDATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateAccountPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAccountUpdateAccountRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared_account_enum_status_enum.AccountEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateAccountSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAccountRequest:
    path_params: UpdateAccountPathParams = dataclasses.field()
    security: UpdateAccountSecurity = dataclasses.field()
    request: Optional[UpdateAccountUpdateAccountRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account: Optional[shared_api_v2010_account.APIV2010Account] = dataclasses.field(default=None)
    
