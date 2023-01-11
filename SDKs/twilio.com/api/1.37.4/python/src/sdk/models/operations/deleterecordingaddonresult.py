import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_RECORDING_ADD_ON_RESULT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteRecordingAddOnResultPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRecordingAddOnResultSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteRecordingAddOnResultRequest:
    path_params: DeleteRecordingAddOnResultPathParams = dataclasses.field()
    security: DeleteRecordingAddOnResultSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteRecordingAddOnResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
