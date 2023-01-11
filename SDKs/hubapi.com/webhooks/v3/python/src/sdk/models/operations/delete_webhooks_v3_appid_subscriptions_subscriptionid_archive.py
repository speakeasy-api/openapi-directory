import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveRequest:
    path_params: DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams = dataclasses.field()
    security: DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
