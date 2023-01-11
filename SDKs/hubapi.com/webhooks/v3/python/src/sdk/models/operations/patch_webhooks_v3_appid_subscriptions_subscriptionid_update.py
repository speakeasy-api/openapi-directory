import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import subscriptionpatchrequest as shared_subscriptionpatchrequest
from ..shared import subscriptionresponse as shared_subscriptionresponse


@dataclasses.dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity:
    developer_hapikey: shared_security.SchemeDeveloperHapikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateRequest:
    path_params: PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams = dataclasses.field()
    request: shared_subscriptionpatchrequest.SubscriptionPatchRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    subscription_response: Optional[shared_subscriptionresponse.SubscriptionResponse] = dataclasses.field(default=None)
    
