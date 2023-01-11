import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteSearchQueryParams:
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    maxlength: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlength', 'style': 'form', 'explode': True }})
    minlength: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlength', 'style': 'form', 'explode': True }})
    private: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'private', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sfw: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sfw', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteSearchSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteSearchRequest:
    query_params: GetQuoteSearchQueryParams = dataclasses.field()
    security: GetQuoteSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quote_response: Optional[Any] = dataclasses.field(default=None)
    
