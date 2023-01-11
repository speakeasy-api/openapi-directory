import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetStripeGatewayUserUserIDCardsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStripeGatewayUserUserIDCardsRequest:
    path_params: GetStripeGatewayUserUserIDCardsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStripeGatewayUserUserIDCardsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
