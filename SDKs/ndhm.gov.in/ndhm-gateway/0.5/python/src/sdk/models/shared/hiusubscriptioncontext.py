import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptioncategory_enum as shared_subscriptioncategory_enum
from ..shared import organizationrepresentation as shared_organizationrepresentation
from ..shared import subscriptionperiod as shared_subscriptionperiod


@dataclass_json
@dataclasses.dataclass
class HiuSubscriptionContext:
    categories: list[shared_subscriptioncategory_enum.SubscriptionCategoryEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    period: shared_subscriptionperiod.SubscriptionPeriod = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    hip: Optional[shared_organizationrepresentation.OrganizationRepresentation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    
