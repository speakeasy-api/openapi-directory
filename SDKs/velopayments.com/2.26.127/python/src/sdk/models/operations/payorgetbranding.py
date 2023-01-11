import dataclasses
from typing import Any,Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import payorbrandingresponse as shared_payorbrandingresponse


@dataclasses.dataclass
class PayorGetBrandingPathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayorGetBrandingRequest:
    path_params: PayorGetBrandingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PayorGetBrandingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    payor_branding_response: Optional[shared_payorbrandingresponse.PayorBrandingResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
