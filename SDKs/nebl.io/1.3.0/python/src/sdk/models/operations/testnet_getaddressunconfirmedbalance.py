import dataclasses
from typing import Optional


@dataclasses.dataclass
class TestnetGetAddressUnconfirmedBalancePathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetAddressUnconfirmedBalanceRequest:
    path_params: TestnetGetAddressUnconfirmedBalancePathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetAddressUnconfirmedBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_unconfirmed_balance_response: Optional[float] = dataclasses.field(default=None)
    
