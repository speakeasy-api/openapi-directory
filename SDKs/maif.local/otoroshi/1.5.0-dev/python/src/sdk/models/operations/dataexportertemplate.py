import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataexporterconfig as shared_dataexporterconfig


@dataclasses.dataclass
class DataExporterTemplateQueryParams:
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DataExporterTemplateSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DataExporterTemplateRequest:
    query_params: DataExporterTemplateQueryParams = dataclasses.field()
    security: DataExporterTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DataExporterTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    data_exporter_config: Optional[shared_dataexporterconfig.DataExporterConfig] = dataclasses.field(default=None)
    
