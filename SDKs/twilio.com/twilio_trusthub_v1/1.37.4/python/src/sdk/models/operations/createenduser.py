import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import trusthub_v1_end_user as shared_trusthub_v1_end_user


CREATE_END_USER_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclasses.dataclass
class CreateEndUserCreateEndUserRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    type: str = dataclasses.field(metadata={'form': { 'field_name': 'Type' }})
    attributes: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclasses.dataclass
class CreateEndUserSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateEndUserRequest:
    security: CreateEndUserSecurity = dataclasses.field()
    request: Optional[CreateEndUserCreateEndUserRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateEndUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    trusthub_v1_end_user: Optional[shared_trusthub_v1_end_user.TrusthubV1EndUser] = dataclasses.field(default=None)
    
