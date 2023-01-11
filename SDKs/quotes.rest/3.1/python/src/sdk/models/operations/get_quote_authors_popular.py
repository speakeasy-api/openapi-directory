import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteAuthorsPopularQueryParams:
    detailed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'detailed', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteAuthorsPopularSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteAuthorsPopularRequest:
    query_params: GetQuoteAuthorsPopularQueryParams = dataclasses.field()
    security: GetQuoteAuthorsPopularSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteAuthorsPopularResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
