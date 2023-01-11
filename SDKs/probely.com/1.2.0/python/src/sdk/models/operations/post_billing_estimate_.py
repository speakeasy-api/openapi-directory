import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscription as shared_subscription
from ..shared import invoice as shared_invoice


@dataclass_json
@dataclasses.dataclass
class PostBillingEstimate400ApplicationJSON:
    less_than_field_name_greater_than_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('<field name>') }})
    non_field_errors: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_field_errors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBillingEstimate401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PostBillingEstimate403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PostBillingEstimateRequest:
    request: shared_subscription.SubscriptionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostBillingEstimateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invoice: Optional[shared_invoice.Invoice] = dataclasses.field(default=None)
    post_billing_estimate_400_application_json_object: Optional[PostBillingEstimate400ApplicationJSON] = dataclasses.field(default=None)
    post_billing_estimate_401_application_json_object: Optional[PostBillingEstimate401ApplicationJSON] = dataclasses.field(default=None)
    post_billing_estimate_403_application_json_object: Optional[PostBillingEstimate403ApplicationJSON] = dataclasses.field(default=None)
    
