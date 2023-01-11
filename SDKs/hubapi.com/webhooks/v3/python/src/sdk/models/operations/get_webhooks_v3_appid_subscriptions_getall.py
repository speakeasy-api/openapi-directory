import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import subscriptionlistresponse as shared_subscriptionlistresponse


@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllRequest:
    path_params: GetWebhooksV3AppIDSubscriptionsGetAllPathParams = dataclasses.field()
    security: GetWebhooksV3AppIDSubscriptionsGetAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetWebhooksV3AppIDSubscriptionsGetAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    subscription_list_response: Optional[shared_subscriptionlistresponse.SubscriptionListResponse] = dataclasses.field(default=None)
    
