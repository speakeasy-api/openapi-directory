import dataclasses
from typing import Any,Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payorv1 as shared_payorv1


@dataclasses.dataclass
class GetPayorByIDPathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayorByIDRequest:
    path_params: GetPayorByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayorByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payor_v1: Optional[shared_payorv1.PayorV1] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
