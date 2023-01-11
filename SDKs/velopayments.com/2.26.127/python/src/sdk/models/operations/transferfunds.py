import dataclasses
from typing import Any,Optional
from ..shared import transferrequest as shared_transferrequest


@dataclasses.dataclass
class TransferFundsPathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransferFundsRequest:
    path_params: TransferFundsPathParams = dataclasses.field()
    request: shared_transferrequest.TransferRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TransferFundsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
