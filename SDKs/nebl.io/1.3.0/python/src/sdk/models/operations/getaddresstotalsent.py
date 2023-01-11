import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAddressTotalSentPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAddressTotalSentRequest:
    path_params: GetAddressTotalSentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAddressTotalSentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_address_total_sent_response: Optional[float] = dataclasses.field(default=None)
    
