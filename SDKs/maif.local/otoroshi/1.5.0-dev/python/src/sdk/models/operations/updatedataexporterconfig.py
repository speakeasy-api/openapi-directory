import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class UpdateDataExporterConfigPathParams:
    data_exporter_config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDataExporterConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateDataExporterConfigRequest:
    path_params: UpdateDataExporterConfigPathParams = dataclasses.field()
    security: UpdateDataExporterConfigSecurity = dataclasses.field()
    request: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDataExporterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_exporter_config: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None)
    
