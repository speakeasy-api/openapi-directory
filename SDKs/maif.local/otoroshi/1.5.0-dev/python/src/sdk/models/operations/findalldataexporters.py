import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class FindAllDataExportersSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FindAllDataExportersRequest:
    security: FindAllDataExportersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FindAllDataExportersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_exporter_configs: Optional[list[shared_dataexporterconfig.DataExporterConfig]] = dataclasses.field(default=None)
    
