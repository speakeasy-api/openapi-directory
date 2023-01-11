import dataclasses
from typing import Optional
from ..shared import gettxresponse as shared_gettxresponse


@dataclasses.dataclass
class TestnetGetTxPathParams:
    txid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetTxRequest:
    path_params: TestnetGetTxPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetTxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tx_response: Optional[shared_gettxresponse.GetTxResponse] = dataclasses.field(default=None)
    
