import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_RECORDING_ADD_ON_RESULT_PAYLOAD_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class DeleteRecordingAddOnResultPayloadPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    add_on_result_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AddOnResultSid', 'style': 'simple', 'explode': False }})
    reference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ReferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRecordingAddOnResultPayloadSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteRecordingAddOnResultPayloadRequest:
    path_params: DeleteRecordingAddOnResultPayloadPathParams = dataclasses.field()
    security: DeleteRecordingAddOnResultPayloadSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteRecordingAddOnResultPayloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
