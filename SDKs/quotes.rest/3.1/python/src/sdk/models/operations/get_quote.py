import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetQuoteQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetQuoteSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetQuoteRequest:
    query_params: GetQuoteQueryParams = dataclasses.field()
    security: GetQuoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quote_response: Optional[Any] = dataclasses.field(default=None)
    
