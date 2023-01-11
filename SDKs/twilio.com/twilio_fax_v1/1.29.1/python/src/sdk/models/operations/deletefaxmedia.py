import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_FAX_MEDIA_SERVERS = [
	"https://fax.twilio.com",
]


@dataclasses.dataclass
class DeleteFaxMediaPathParams:
    fax_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FaxSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteFaxMediaSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteFaxMediaRequest:
    path_params: DeleteFaxMediaPathParams = dataclasses.field()
    security: DeleteFaxMediaSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteFaxMediaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
