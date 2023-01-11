import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetNumbersIsPalindromeQueryParams:
    number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNumbersIsPalindromeSecurity:
    x_mathtools_api_secret: shared_security.SchemeXMathtoolsAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetNumbersIsPalindromeRequest:
    query_params: GetNumbersIsPalindromeQueryParams = dataclasses.field()
    security: GetNumbersIsPalindromeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetNumbersIsPalindromeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
