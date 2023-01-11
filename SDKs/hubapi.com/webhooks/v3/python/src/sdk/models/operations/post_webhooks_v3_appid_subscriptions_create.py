import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import subscriptioncreaterequest as shared_subscriptioncreaterequest
from ..shared import subscriptionresponse as shared_subscriptionresponse


@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsCreatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsCreateSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsCreateRequest:
    path_params: PostWebhooksV3AppIDSubscriptionsCreatePathParams = dataclasses.field()
    request: shared_subscriptioncreaterequest.SubscriptionCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostWebhooksV3AppIDSubscriptionsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostWebhooksV3AppIDSubscriptionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    subscription_response: Optional[shared_subscriptionresponse.SubscriptionResponse] = dataclasses.field(default=None)
    
