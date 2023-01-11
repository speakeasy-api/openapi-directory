import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetCategoryPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategoryHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCategorySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetCategoryRequest:
    headers: GetCategoryHeaders = dataclasses.field()
    path_params: GetCategoryPathParams = dataclasses.field()
    security: GetCategorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
