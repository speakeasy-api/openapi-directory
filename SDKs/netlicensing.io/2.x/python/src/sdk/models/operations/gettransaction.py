import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTransactionPathParams:
    transaction_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetTransactionRequest:
    path_params: GetTransactionPathParams = dataclasses.field()
    security: GetTransactionSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
