import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testordercustomermarketingrightsinfo as shared_testordercustomermarketingrightsinfo


@dataclass_json
@dataclasses.dataclass
class TestOrderCustomer:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    explicit_marketing_preference: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitMarketingPreference') }})
    full_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    marketing_rights_info: Optional[shared_testordercustomermarketingrightsinfo.TestOrderCustomerMarketingRightsInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingRightsInfo') }})
    
