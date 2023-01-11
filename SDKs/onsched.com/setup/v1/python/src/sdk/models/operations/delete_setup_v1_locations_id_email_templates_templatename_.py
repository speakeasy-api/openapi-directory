import dataclasses
from typing import Optional
from ..shared import contentresult as shared_contentresult


@dataclasses.dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest:
    path_params: DeleteSetupV1LocationsIDEmailTemplatesTemplateNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    content_result: Optional[shared_contentresult.ContentResult] = dataclasses.field(default=None)
    
