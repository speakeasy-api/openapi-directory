import dataclasses
from typing import Any,Optional
from ..shared import payorlogorequest as shared_payorlogorequest


@dataclasses.dataclass
class PayorAddPayorLogoPathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayorAddPayorLogoRequest:
    path_params: PayorAddPayorLogoPathParams = dataclasses.field()
    request: shared_payorlogorequest.PayorLogoRequest = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PayorAddPayorLogoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
