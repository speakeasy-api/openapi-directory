import dataclasses
from typing import Optional
from ..shared import gettransactionresponse as shared_gettransactionresponse


@dataclasses.dataclass
class GetTransactionsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionsIDRequest:
    path_params: GetTransactionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_transaction_response: Optional[shared_gettransactionresponse.GetTransactionResponse] = dataclasses.field(default=None)
    
