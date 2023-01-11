import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteCategoriesSearchQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteCategoriesSearchSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteCategoriesSearchRequest:
    query_params: GetQuoteCategoriesSearchQueryParams = dataclasses.field()
    security: GetQuoteCategoriesSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteCategoriesSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
