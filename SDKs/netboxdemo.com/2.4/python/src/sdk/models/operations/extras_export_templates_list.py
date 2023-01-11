import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exporttemplate as shared_exporttemplate


@dataclasses.dataclass
class ExtrasExportTemplatesListQueryParams:
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content_type', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ExtrasExportTemplatesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_exporttemplate.ExportTemplate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ExtrasExportTemplatesListRequest:
    query_params: ExtrasExportTemplatesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasExportTemplatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    extras_export_templates_list_200_application_json_object: Optional[ExtrasExportTemplatesList200ApplicationJSON] = dataclasses.field(default=None)
    
