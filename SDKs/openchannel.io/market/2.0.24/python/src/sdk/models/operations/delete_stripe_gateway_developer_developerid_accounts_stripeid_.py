import dataclasses
from typing import Optional


@dataclasses.dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams:
    developer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    stripe_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'stripeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest:
    path_params: DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
