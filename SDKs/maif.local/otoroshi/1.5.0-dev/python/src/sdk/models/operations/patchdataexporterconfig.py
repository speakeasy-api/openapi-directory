import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class PatchDataExporterConfigPathParams:
    data_exporter_config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchDataExporterConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PatchDataExporterConfigRequest:
    path_params: PatchDataExporterConfigPathParams = dataclasses.field()
    security: PatchDataExporterConfigSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchDataExporterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_exporter_config: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None)
    
