import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import session_enum_status_enum as shared_session_enum_status_enum
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session as shared_proxy_v1_service_session


UPDATE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class UpdateSessionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSessionUpdateSessionRequest:
    date_expiry: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateExpiry' }})
    status: Optional[shared_session_enum_status_enum.SessionEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclasses.dataclass
class UpdateSessionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSessionRequest:
    path_params: UpdateSessionPathParams = dataclasses.field()
    security: UpdateSessionSecurity = dataclasses.field()
    request: Optional[UpdateSessionUpdateSessionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session: Optional[shared_proxy_v1_service_session.ProxyV1ServiceSession] = dataclasses.field(default=None)
    
