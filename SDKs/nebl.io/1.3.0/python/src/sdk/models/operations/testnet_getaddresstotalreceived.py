import dataclasses
from typing import Optional


@dataclasses.dataclass
class TestnetGetAddressTotalReceivedPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetAddressTotalReceivedRequest:
    path_params: TestnetGetAddressTotalReceivedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetAddressTotalReceivedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_total_received_response: Optional[float] = dataclasses.field(default=None)
    
