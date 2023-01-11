import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteRandomQueryParams:
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteRandomSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteRandomRequest:
    query_params: GetQuoteRandomQueryParams = dataclasses.field()
    security: GetQuoteRandomSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteRandomResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quote_response: Optional[Any] = dataclasses.field(default=None)
    
