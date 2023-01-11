import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteImageSearchQueryParams:
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'private', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteImageSearchSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteImageSearchRequest:
    query_params: GetQuoteImageSearchQueryParams = dataclasses.field()
    security: GetQuoteImageSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteImageSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
