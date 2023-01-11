import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteDocPathParams:
    slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDocHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDocSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteDocRequest:
    headers: DeleteDocHeaders = dataclasses.field()
    path_params: DeleteDocPathParams = dataclasses.field()
    security: DeleteDocSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDocResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
