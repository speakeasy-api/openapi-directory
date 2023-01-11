import dataclasses
from typing import Optional
from ..shared import getrawtxresponse as shared_getrawtxresponse


@dataclasses.dataclass
class GetRawTxPathParams:
    txid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'txid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRawTxRequest:
    path_params: GetRawTxPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRawTxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_raw_tx_response: Optional[shared_getrawtxresponse.GetRawTxResponse] = dataclasses.field(default=None)
    
