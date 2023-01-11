import dataclasses
from typing import Any,Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payorv2 as shared_payorv2


@dataclasses.dataclass
class GetPayorByIDV2PathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayorByIDV2Request:
    path_params: GetPayorByIDV2PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayorByIDV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payor_v2: Optional[shared_payorv2.PayorV2] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
