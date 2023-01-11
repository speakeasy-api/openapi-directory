import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import user_enum_state_type_enum as shared_user_enum_state_type_enum
from ..shared import security as shared_security
from ..shared import frontline_v1_user as shared_frontline_v1_user


UPDATE_USER_SERVERS = [
	"https://frontline-api.twilio.com",
]


@dataclasses.dataclass
class UpdateUserPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUserUpdateUserRequest:
    avatar: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Avatar' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    is_available: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'IsAvailable' }})
    state: Optional[shared_user_enum_state_type_enum.UserEnumStateTypeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'State' }})
    

@dataclasses.dataclass
class UpdateUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUserRequest:
    path_params: UpdateUserPathParams = dataclasses.field()
    security: UpdateUserSecurity = dataclasses.field()
    request: Optional[UpdateUserUpdateUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    frontline_v1_user: Optional[shared_frontline_v1_user.FrontlineV1User] = dataclasses.field(default=None)
    
