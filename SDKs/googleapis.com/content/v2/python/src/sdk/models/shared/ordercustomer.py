import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ordercustomermarketingrightsinfo as shared_ordercustomermarketingrightsinfo


@dataclass_json
@dataclasses.dataclass
class OrderCustomer:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    explicit_marketing_preference: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitMarketingPreference') }})
    full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    invoice_receiving_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceReceivingEmail') }})
    marketing_rights_info: Optional[shared_ordercustomermarketingrightsinfo.OrderCustomerMarketingRightsInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingRightsInfo') }})
    
