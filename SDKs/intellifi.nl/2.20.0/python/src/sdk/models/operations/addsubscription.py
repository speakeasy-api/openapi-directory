import dataclasses
from typing import Optional
from ..shared import subscription as shared_subscription
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddSubscriptionRequest:
    request: shared_subscription.SubscriptionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
