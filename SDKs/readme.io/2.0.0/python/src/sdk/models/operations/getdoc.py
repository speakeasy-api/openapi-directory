import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class GetDocPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDocSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetDocRequest:
    headers: GetDocHeaders = dataclasses.field()
    path_params: GetDocPathParams = dataclasses.field()
    security: GetDocSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDocResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
