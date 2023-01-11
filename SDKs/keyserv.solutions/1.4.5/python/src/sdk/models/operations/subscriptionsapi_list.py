import dataclasses
from typing import Any,Optional
from ..shared import findcredentials as shared_findcredentials
from ..shared import subscriptionview as shared_subscriptionview


@dataclasses.dataclass
class SubscriptionsAPIListQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SubscriptionsAPIListRequest:
    query_params: SubscriptionsAPIListQueryParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscriptionsAPIListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription_views: Optional[list[shared_subscriptionview.SubscriptionView]] = dataclasses.field(default=None)
    
