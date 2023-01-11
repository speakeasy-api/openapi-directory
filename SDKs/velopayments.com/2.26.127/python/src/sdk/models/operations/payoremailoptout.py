import dataclasses
from typing import Any,Optional
from ..shared import payoremailoptoutrequest as shared_payoremailoptoutrequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PayorEmailOptOutPathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayorEmailOptOutRequest:
    path_params: PayorEmailOptOutPathParams = dataclasses.field()
    request: shared_payoremailoptoutrequest.PayorEmailOptOutRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PayorEmailOptOutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
