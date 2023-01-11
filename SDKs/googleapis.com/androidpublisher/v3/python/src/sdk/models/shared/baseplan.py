import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorenewingbaseplantype as shared_autorenewingbaseplantype
from ..shared import offertag as shared_offertag
from ..shared import otherregionsbaseplanconfig as shared_otherregionsbaseplanconfig
from ..shared import prepaidbaseplantype as shared_prepaidbaseplantype
from ..shared import regionalbaseplanconfig as shared_regionalbaseplanconfig

class BasePlanStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclasses.dataclass
class BasePlan:
    r"""BasePlan
    A single base plan for a subscription.
    """
    
    auto_renewing_base_plan_type: Optional[shared_autorenewingbaseplantype.AutoRenewingBasePlanType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewingBasePlanType') }})
    base_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_tags: Optional[list[shared_offertag.OfferTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[shared_otherregionsbaseplanconfig.OtherRegionsBasePlanConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    prepaid_base_plan_type: Optional[shared_prepaidbaseplantype.PrepaidBasePlanType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidBasePlanType') }})
    regional_configs: Optional[list[shared_regionalbaseplanconfig.RegionalBasePlanConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    state: Optional[BasePlanStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclasses.dataclass
class BasePlanInput:
    r"""BasePlanInput
    A single base plan for a subscription.
    """
    
    auto_renewing_base_plan_type: Optional[shared_autorenewingbaseplantype.AutoRenewingBasePlanType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewingBasePlanType') }})
    base_plan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlanId') }})
    offer_tags: Optional[list[shared_offertag.OfferTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerTags') }})
    other_regions_config: Optional[shared_otherregionsbaseplanconfig.OtherRegionsBasePlanConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    prepaid_base_plan_type: Optional[shared_prepaidbaseplantype.PrepaidBasePlanType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidBasePlanType') }})
    regional_configs: Optional[list[shared_regionalbaseplanconfig.RegionalBasePlanConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    
