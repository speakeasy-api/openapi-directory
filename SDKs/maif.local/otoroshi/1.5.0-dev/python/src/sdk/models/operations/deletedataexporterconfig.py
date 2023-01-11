import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleted as shared_deleted


@dataclasses.dataclass
class DeleteDataExporterConfigPathParams:
    data_exporter_config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDataExporterConfigSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteDataExporterConfigRequest:
    path_params: DeleteDataExporterConfigPathParams = dataclasses.field()
    security: DeleteDataExporterConfigSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDataExporterConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deleted: Optional[shared_deleted.Deleted] = dataclasses.field(default=None)
    
