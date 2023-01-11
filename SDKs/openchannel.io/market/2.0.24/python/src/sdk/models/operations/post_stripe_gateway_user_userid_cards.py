import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isDefault', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsRequest:
    path_params: PostStripeGatewayUserUserIDCardsPathParams = dataclasses.field()
    query_params: PostStripeGatewayUserUserIDCardsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
