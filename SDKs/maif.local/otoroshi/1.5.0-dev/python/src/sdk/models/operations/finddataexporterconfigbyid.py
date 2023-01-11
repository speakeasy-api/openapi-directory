import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class FindDataExporterConfigByIDPathParams:
    data_exporter_config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dataExporterConfigId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FindDataExporterConfigByIDSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindDataExporterConfigByIDRequest:
    path_params: FindDataExporterConfigByIDPathParams = dataclasses.field()
    security: FindDataExporterConfigByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindDataExporterConfigByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_exporter_config: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None)
    
