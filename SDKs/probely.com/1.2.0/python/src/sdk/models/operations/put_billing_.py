import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billing as shared_billing


@dataclass_json
@dataclasses.dataclass
class PutBilling401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class PutBilling403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class PutBillingRequest:
    request: shared_billing.Billing = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutBillingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    billing: Optional[shared_billing.Billing] = dataclasses.field(default=None)
    put_billing_401_application_json_object: Optional[PutBilling401ApplicationJSON] = dataclasses.field(default=None)
    put_billing_403_application_json_object: Optional[PutBilling403ApplicationJSON] = dataclasses.field(default=None)
    
