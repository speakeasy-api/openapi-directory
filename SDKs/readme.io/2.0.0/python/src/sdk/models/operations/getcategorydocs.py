import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetCategoryDocsPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoryDocsHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoryDocsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetCategoryDocsRequest:
    headers: GetCategoryDocsHeaders = dataclasses.field()
    path_params: GetCategoryDocsPathParams = dataclasses.field()
    security: GetCategoryDocsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoryDocsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
