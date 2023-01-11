import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import subscriptionresponse as shared_subscriptionresponse


@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDRequest:
    path_params: GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDPathParams = dataclasses.field()
    security: GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    subscription_response: Optional[shared_subscriptionresponse.SubscriptionResponse] = dataclasses.field(default=None)
    
