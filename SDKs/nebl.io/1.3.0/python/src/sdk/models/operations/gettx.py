import dataclasses
from typing import Optional
from ..shared import gettxresponse as shared_gettxresponse


@dataclasses.dataclass
class GetTxPathParams:
    txid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTxRequest:
    path_params: GetTxPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_tx_response: Optional[shared_gettxresponse.GetTxResponse] = dataclasses.field(default=None)
    
