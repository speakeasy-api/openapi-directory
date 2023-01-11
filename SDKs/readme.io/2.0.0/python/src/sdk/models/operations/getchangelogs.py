import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetChangelogsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetChangelogsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetChangelogsRequest:
    query_params: GetChangelogsQueryParams = dataclasses.field()
    security: GetChangelogsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetChangelogsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
