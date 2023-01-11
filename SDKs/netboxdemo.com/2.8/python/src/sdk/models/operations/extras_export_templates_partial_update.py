import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableexporttemplate as shared_writableexporttemplate
from ..shared import exporttemplate as shared_exporttemplate


@dataclasses.dataclass
class ExtrasExportTemplatesPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesPartialUpdateRequest:
    path_params: ExtrasExportTemplatesPartialUpdatePathParams = dataclasses.field()
    request: shared_writableexporttemplate.WritableExportTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_template: Optional[shared_exporttemplate.ExportTemplate] = dataclasses.field(default=None)
    
