import dataclasses
from typing import Optional
from ..shared import getaddressresponse as shared_getaddressresponse


@dataclasses.dataclass
class TestnetGetAddressPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetAddressRequest:
    path_params: TestnetGetAddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_response: Optional[shared_getaddressresponse.GetAddressResponse] = dataclasses.field(default=None)
    
