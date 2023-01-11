import dataclasses



@dataclasses.dataclass
class GetTransactionsTransactionIDPathParams:
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionsTransactionIDRequest:
    path_params: GetTransactionsTransactionIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionsTransactionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
