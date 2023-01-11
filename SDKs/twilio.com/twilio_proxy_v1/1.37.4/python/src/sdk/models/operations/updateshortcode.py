import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_short_code as shared_proxy_v1_service_short_code


UPDATE_SHORT_CODE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class UpdateShortCodePathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateShortCodeUpdateShortCodeRequest:
    is_reserved: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IsReserved' }})
    

@dataclasses.dataclass
class UpdateShortCodeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateShortCodeRequest:
    path_params: UpdateShortCodePathParams = dataclasses.field()
    security: UpdateShortCodeSecurity = dataclasses.field()
    request: Optional[UpdateShortCodeUpdateShortCodeRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateShortCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_short_code: Optional[shared_proxy_v1_service_short_code.ProxyV1ServiceShortCode] = dataclasses.field(default=None)
    
