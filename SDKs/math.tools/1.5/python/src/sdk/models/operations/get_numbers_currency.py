import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersCurrencyQueryParams:
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersCurrencySecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersCurrencyRequest:
    query_params: GetNumbersCurrencyQueryParams = dataclasses.field()
    security: GetNumbersCurrencySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersCurrencyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
