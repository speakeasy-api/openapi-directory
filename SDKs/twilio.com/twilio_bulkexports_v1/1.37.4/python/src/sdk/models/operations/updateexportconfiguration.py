import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import bulkexports_v1_export_configuration as shared_bulkexports_v1_export_configuration


UPDATE_EXPORT_CONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclasses.dataclass
class UpdateExportConfigurationPathParams:
    resource_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateExportConfigurationUpdateExportConfigurationRequest:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    webhook_method: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclasses.dataclass
class UpdateExportConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateExportConfigurationRequest:
    path_params: UpdateExportConfigurationPathParams = dataclasses.field()
    security: UpdateExportConfigurationSecurity = dataclasses.field()
    request: Optional[UpdateExportConfigurationUpdateExportConfigurationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateExportConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bulkexports_v1_export_configuration: Optional[shared_bulkexports_v1_export_configuration.BulkexportsV1ExportConfiguration] = dataclasses.field(default=None)
    
