import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class DeleteJobPathParams:
    job_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JobSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteJobSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteJobRequest:
    path_params: DeleteJobPathParams = dataclasses.field()
    security: DeleteJobSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
