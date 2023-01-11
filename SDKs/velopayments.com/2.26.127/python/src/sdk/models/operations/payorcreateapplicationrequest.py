import dataclasses
from typing import Any,Optional
from ..shared import payorcreateapplicationrequest as shared_payorcreateapplicationrequest


@dataclasses.dataclass
class PayorCreateApplicationRequestPathParams:
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayorCreateApplicationRequestRequest:
    path_params: PayorCreateApplicationRequestPathParams = dataclasses.field()
    request: shared_payorcreateapplicationrequest.PayorCreateApplicationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PayorCreateApplicationRequestResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
