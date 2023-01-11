import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAddressBalancePathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddressBalanceRequest:
    path_params: GetAddressBalancePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddressBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_balance_response: Optional[float] = dataclasses.field(default=None)
    
