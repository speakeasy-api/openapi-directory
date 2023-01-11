import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_export_custom_job as shared_bulkexports_v1_export_export_custom_job


LIST_EXPORT_CUSTOM_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class ListExportCustomJobPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListExportCustomJobQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListExportCustomJobSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListExportCustomJobListExportCustomJobResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListExportCustomJobListExportCustomJobResponse:
    jobs: Optional[list[shared_bulkexports_v1_export_export_custom_job.BulkexportsV1ExportExportCustomJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    meta: Optional[ListExportCustomJobListExportCustomJobResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListExportCustomJobRequest:
    path_params: ListExportCustomJobPathParams = dataclasses.field()
    query_params: ListExportCustomJobQueryParams = dataclasses.field()
    security: ListExportCustomJobSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListExportCustomJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_export_custom_job_response: Optional[ListExportCustomJobListExportCustomJobResponse] = dataclasses.field(default=None)
    
