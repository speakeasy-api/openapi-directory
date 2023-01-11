import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import session_enum_mode_enum as shared_session_enum_mode_enum
from ..shared import session_enum_status_enum as shared_session_enum_status_enum
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session as shared_proxy_v1_service_session


CREATE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class CreateSessionPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateSessionCreateSessionRequest:
    date_expiry: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateExpiry' }})
    mode: Optional[shared_session_enum_mode_enum.SessionEnumModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Mode' }})
    participants: Optional[list[Any]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Participants' }})
    status: Optional[shared_session_enum_status_enum.SessionEnumStatusEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Status' }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateSessionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateSessionRequest:
    path_params: CreateSessionPathParams = dataclasses.field()
    security: CreateSessionSecurity = dataclasses.field()
    request: Optional[CreateSessionCreateSessionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session: Optional[shared_proxy_v1_service_session.ProxyV1ServiceSession] = dataclasses.field(default=None)
    
