import dataclasses
from typing import Optional
from ..shared import writableexporttemplate as shared_writableexporttemplate
from ..shared import exporttemplate as shared_exporttemplate


@dataclasses.dataclass
class ExtrasExportTemplatesCreateRequest:
    request: shared_writableexporttemplate.WritableExportTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_template: Optional[shared_exporttemplate.ExportTemplate] = dataclasses.field(default=None)
    
