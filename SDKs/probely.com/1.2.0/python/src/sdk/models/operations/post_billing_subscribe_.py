import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscription as shared_subscription
from ..shared import invoice as shared_invoice


@dataclass_json
@dataclasses.dataclass
class PostBillingSubscribe400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBillingSubscribe401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBillingSubscribe403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostBillingSubscribeRequest:
    request: shared_subscription.SubscriptionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostBillingSubscribeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None)
    post_billing_subscribe_400_application_json_object: Optional[PostBillingSubscribe400ApplicationJSON] = dataclasses.field(default=None)
    post_billing_subscribe_401_application_json_object: Optional[PostBillingSubscribe401ApplicationJSON] = dataclasses.field(default=None)
    post_billing_subscribe_403_application_json_object: Optional[PostBillingSubscribe403ApplicationJSON] = dataclasses.field(default=None)
    
