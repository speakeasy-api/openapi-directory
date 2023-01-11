import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteImageBackgroundSearchQueryParams:
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteImageBackgroundSearchSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteImageBackgroundSearchRequest:
    query_params: GetQuoteImageBackgroundSearchQueryParams = dataclasses.field()
    security: GetQuoteImageBackgroundSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteImageBackgroundSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
