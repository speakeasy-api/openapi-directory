import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import billingrate as shared_billingrate


@dataclass_json
@dataclasses.dataclass
class BillingRatesListResponse:
    r"""BillingRatesListResponse
    Billing Rate List Response
    """
    
    billing_rates: Optional[list[shared_billingrate.BillingRate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingRates') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
