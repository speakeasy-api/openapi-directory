import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class CreateDataExporterConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateDataExporterConfigRequest:
    security: CreateDataExporterConfigSecurity = dataclasses.field()
    request: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDataExporterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_exporter_config: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None)
    
