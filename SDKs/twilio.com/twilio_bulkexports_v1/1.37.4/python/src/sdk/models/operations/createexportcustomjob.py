import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_export_custom_job as shared_bulkexports_v1_export_export_custom_job


CREATE_EXPORT_CUSTOM_JOB_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class CreateExportCustomJobPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateExportCustomJobCreateExportCustomJobRequest:
    end_day: str = dataclasses.field(metadata={'form': { 'field_name': 'EndDay' }})
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    start_day: str = dataclasses.field(metadata={'form': { 'field_name': 'StartDay' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Email' }})
    webhook_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclasses.dataclass
class CreateExportCustomJobSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateExportCustomJobRequest:
    path_params: CreateExportCustomJobPathParams = dataclasses.field()
    security: CreateExportCustomJobSecurity = dataclasses.field()
    request: Optional[CreateExportCustomJobCreateExportCustomJobRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateExportCustomJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulkexports_v1_export_export_custom_job: Optional[shared_bulkexports_v1_export_export_custom_job.BulkexportsV1ExportExportCustomJob] = dataclasses.field(default=None)
    
