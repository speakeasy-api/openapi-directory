import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export as shared_bulkexports_v1_export


FETCH_EXPORT_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class FetchExportPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchExportSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchExportRequest:
    path_params: FetchExportPathParams = dataclasses.field()
    security: FetchExportSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchExportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulkexports_v1_export: Optional[shared_bulkexports_v1_export.BulkexportsV1Export] = dataclasses.field(default=None)
    
