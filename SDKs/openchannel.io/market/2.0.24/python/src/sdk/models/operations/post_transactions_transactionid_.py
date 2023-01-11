import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostTransactionsTransactionIDPathParams:
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostTransactionsTransactionIDQueryParams:
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostTransactionsTransactionIDRequest:
    path_params: PostTransactionsTransactionIDPathParams = dataclasses.field()
    query_params: PostTransactionsTransactionIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostTransactionsTransactionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
