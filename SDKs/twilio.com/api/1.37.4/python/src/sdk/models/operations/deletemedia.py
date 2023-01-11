import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_MEDIA_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteMediaPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMediaSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteMediaRequest:
    path_params: DeleteMediaPathParams = dataclasses.field()
    security: DeleteMediaSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
