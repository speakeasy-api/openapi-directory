import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetUserSubscriptionListSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserSubscriptionListRequest:
    security: GetUserSubscriptionListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserSubscriptionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    subscription_data_list: Optional[Any] = dataclasses.field(default=None)
    
