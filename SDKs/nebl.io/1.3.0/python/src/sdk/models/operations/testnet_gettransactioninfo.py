import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import gettransactioninforesponse as shared_gettransactioninforesponse


@dataclasses.dataclass
class TestnetGetTransactionInfoPathParams:
    txid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetTransactionInfoRequest:
    path_params: TestnetGetTransactionInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetTransactionInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_transaction_info_response: Optional[shared_gettransactioninforesponse.GetTransactionInfoResponse] = dataclasses.field(default=None)
    
