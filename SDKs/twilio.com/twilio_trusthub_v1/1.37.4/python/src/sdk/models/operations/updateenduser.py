import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_end_user as shared_trusthub_v1_end_user


UPDATE_END_USER_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class UpdateEndUserPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEndUserUpdateEndUserRequest:
    attributes: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateEndUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateEndUserRequest:
    path_params: UpdateEndUserPathParams = dataclasses.field()
    security: UpdateEndUserSecurity = dataclasses.field()
    request: Optional[UpdateEndUserUpdateEndUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateEndUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_end_user: Optional[shared_trusthub_v1_end_user.TrusthubV1EndUser] = dataclasses.field(default=None)
    
