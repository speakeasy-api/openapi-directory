import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_UNDERSTAND_FIELD_TYPE_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteUnderstandFieldTypePathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUnderstandFieldTypeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteUnderstandFieldTypeRequest:
    path_params: DeleteUnderstandFieldTypePathParams = dataclasses.field()
    security: DeleteUnderstandFieldTypeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteUnderstandFieldTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
