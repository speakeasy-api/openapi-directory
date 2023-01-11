import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsCardIDPathParams:
    card_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsCardIDQueryParams:
    address_city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address_city', 'style': 'form', 'explode': True }})
    address_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address_country', 'style': 'form', 'explode': True }})
    address_line1: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address_line1', 'style': 'form', 'explode': True }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address_line2', 'style': 'form', 'explode': True }})
    address_state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address_state', 'style': 'form', 'explode': True }})
    address_zip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address_zip', 'style': 'form', 'explode': True }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isDefault', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsCardIDRequest:
    path_params: PostStripeGatewayUserUserIDCardsCardIDPathParams = dataclasses.field()
    query_params: PostStripeGatewayUserUserIDCardsCardIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostStripeGatewayUserUserIDCardsCardIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
