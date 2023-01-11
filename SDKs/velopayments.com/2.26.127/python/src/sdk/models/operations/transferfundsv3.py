import dataclasses
from typing import Any,Optional
from ..shared import transferrequest_2 as shared_transferrequest_2


@dataclasses.dataclass
class TransferFundsV3PathParams:
    source_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransferFundsV3Request:
    path_params: TransferFundsV3PathParams = dataclasses.field()
    request: shared_transferrequest_2.TransferRequest2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TransferFundsV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
