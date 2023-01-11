import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetCustomPagesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCustomPagesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetCustomPagesRequest:
    query_params: GetCustomPagesQueryParams = dataclasses.field()
    security: GetCustomPagesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomPagesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
