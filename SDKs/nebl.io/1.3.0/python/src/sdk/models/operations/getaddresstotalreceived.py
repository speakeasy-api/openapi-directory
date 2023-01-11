import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAddressTotalReceivedPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddressTotalReceivedRequest:
    path_params: GetAddressTotalReceivedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddressTotalReceivedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_total_received_response: Optional[float] = dataclasses.field(default=None)
    
