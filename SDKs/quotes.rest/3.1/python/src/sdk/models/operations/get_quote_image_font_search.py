import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteImageFontSearchQueryParams:
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteImageFontSearchSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteImageFontSearchRequest:
    query_params: GetQuoteImageFontSearchQueryParams = dataclasses.field()
    security: GetQuoteImageFontSearchSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteImageFontSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
