import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsPathParams:
    developer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams:
    redirect_url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'redirectUrl', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsRequest:
    path_params: PostStripeGatewayDeveloperDeveloperIDAccountsPathParams = dataclasses.field()
    query_params: PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
