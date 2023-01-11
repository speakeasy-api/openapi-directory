import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableexporttemplate as shared_writableexporttemplate
from ..shared import exporttemplate as shared_exporttemplate


@dataclasses.dataclass
class ExtrasExportTemplatesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesUpdateRequest:
    path_params: ExtrasExportTemplatesUpdatePathParams = dataclasses.field()
    request: shared_writableexporttemplate.WritableExportTemplateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_template: Optional[shared_exporttemplate.ExportTemplate] = dataclasses.field(default=None)
    
