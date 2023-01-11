import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_message_media as shared_api_v2010_account_message_media


FETCH_MEDIA_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchMediaPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMediaSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMediaRequest:
    path_params: FetchMediaPathParams = dataclasses.field()
    security: FetchMediaSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_message_media: Optional[shared_api_v2010_account_message_media.APIV2010AccountMessageMedia] = dataclasses.field(default=None)
    
