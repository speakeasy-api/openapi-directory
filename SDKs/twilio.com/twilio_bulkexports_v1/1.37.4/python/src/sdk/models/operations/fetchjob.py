import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_job as shared_bulkexports_v1_export_job


FETCH_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class FetchJobPathParams:
    job_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'JobSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchJobSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchJobRequest:
    path_params: FetchJobPathParams = dataclasses.field()
    security: FetchJobSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulkexports_v1_export_job: Optional[shared_bulkexports_v1_export_job.BulkexportsV1ExportJob] = dataclasses.field(default=None)
    
