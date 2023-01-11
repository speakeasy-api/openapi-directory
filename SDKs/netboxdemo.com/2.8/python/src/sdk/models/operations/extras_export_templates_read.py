import dataclasses
from typing import Optional
from ..shared import exporttemplate as shared_exporttemplate


@dataclasses.dataclass
class ExtrasExportTemplatesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesReadRequest:
    path_params: ExtrasExportTemplatesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasExportTemplatesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_template: Optional[shared_exporttemplate.ExportTemplate] = dataclasses.field(default=None)
    
