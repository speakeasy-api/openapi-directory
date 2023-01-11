import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import getaddressinforesponse as shared_getaddressinforesponse


@dataclasses.dataclass
class TestnetGetAddressInfoPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetAddressInfoRequest:
    path_params: TestnetGetAddressInfoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetAddressInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_address_info_response: Optional[shared_getaddressinforesponse.GetAddressInfoResponse] = dataclasses.field(default=None)
    
