import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAddressUnconfirmedBalancePathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddressUnconfirmedBalanceRequest:
    path_params: GetAddressUnconfirmedBalancePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddressUnconfirmedBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_unconfirmed_balance_response: Optional[float] = dataclasses.field(default=None)
    
