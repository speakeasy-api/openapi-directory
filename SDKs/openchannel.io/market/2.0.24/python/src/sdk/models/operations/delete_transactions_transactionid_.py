import dataclasses



@dataclasses.dataclass
class DeleteTransactionsTransactionIDPathParams:
    transaction_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'transactionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTransactionsTransactionIDRequest:
    path_params: DeleteTransactionsTransactionIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteTransactionsTransactionIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
