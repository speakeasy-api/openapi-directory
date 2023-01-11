import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDPathParams:
    card_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDRequest:
    path_params: DeleteStripeGatewayUserUserIDCardsCardIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
