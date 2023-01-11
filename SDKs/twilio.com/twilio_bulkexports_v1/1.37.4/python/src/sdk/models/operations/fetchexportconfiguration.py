import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_configuration as shared_bulkexports_v1_export_configuration


FETCH_EXPORT_CONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class FetchExportConfigurationPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchExportConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchExportConfigurationRequest:
    path_params: FetchExportConfigurationPathParams = dataclasses.field()
    security: FetchExportConfigurationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchExportConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulkexports_v1_export_configuration: Optional[shared_bulkexports_v1_export_configuration.BulkexportsV1ExportConfiguration] = dataclasses.field(default=None)
    
