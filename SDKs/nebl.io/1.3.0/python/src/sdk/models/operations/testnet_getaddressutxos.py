import dataclasses
from typing import Optional
from ..shared import getaddressutxosresponse as shared_getaddressutxosresponse


@dataclasses.dataclass
class TestnetGetAddressUtxosPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetAddressUtxosRequest:
    path_params: TestnetGetAddressUtxosPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetAddressUtxosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_utxos_response: Optional[list[shared_getaddressutxosresponse.GetAddressUtxosResponse]] = dataclasses.field(default=None)
    
