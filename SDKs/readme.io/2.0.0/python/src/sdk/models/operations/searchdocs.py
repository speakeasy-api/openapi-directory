import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class SearchDocsQueryParams:
    search: str = dataclasses.field(metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchDocsHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchDocsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class SearchDocsRequest:
    headers: SearchDocsHeaders = dataclasses.field()
    query_params: SearchDocsQueryParams = dataclasses.field()
    security: SearchDocsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SearchDocsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
