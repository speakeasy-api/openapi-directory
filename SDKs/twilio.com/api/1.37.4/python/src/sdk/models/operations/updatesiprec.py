import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import siprec_enum_update_status_enum as shared_siprec_enum_update_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_call_siprec as shared_api_v2010_account_call_siprec


UPDATE_SIPREC_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateSiprecPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSiprecUpdateSiprecRequest:
    status: shared_siprec_enum_update_status_enum.SiprecEnumUpdateStatusEnum = dataclasses.field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclasses.dataclass
class UpdateSiprecSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSiprecRequest:
    path_params: UpdateSiprecPathParams = dataclasses.field()
    security: UpdateSiprecSecurity = dataclasses.field()
    request: Optional[UpdateSiprecUpdateSiprecRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSiprecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_call_siprec: Optional[shared_api_v2010_account_call_siprec.APIV2010AccountCallSiprec] = dataclasses.field(default=None)
    
