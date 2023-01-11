import dataclasses
from typing import Optional
from ..shared import contentresult as shared_contentresult


@dataclasses.dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams:
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest:
    path_params: GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    content_result: Optional[shared_contentresult.ContentResult] = dataclasses.field(default=None)
    
