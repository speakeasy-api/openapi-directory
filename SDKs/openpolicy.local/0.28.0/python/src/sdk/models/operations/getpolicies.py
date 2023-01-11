import dataclasses
from typing import Optional
from ..shared import two_hundredresult as shared_two_hundredresult
from ..shared import four_hundred as shared_four_hundred


@dataclasses.dataclass
class GetPoliciesQueryParams:
    pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPoliciesRequest:
    query_params: GetPoliciesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    two_hundred_result: Optional[shared_two_hundredresult.TwoHundredResult] = dataclasses.field(default=None)
    four_hundred: Optional[shared_four_hundred.FourHundred] = dataclasses.field(default=None)
    
