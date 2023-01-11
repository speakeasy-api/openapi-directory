import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acquisitiontargetingrule as shared_acquisitiontargetingrule
from ..shared import upgradetargetingrule as shared_upgradetargetingrule


@dataclass_json
@dataclasses.dataclass
class SubscriptionOfferTargeting:
    r"""SubscriptionOfferTargeting
    Defines the rule a user needs to satisfy to receive this offer.
    """
    
    acquisition_rule: Optional[shared_acquisitiontargetingrule.AcquisitionTargetingRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acquisitionRule') }})
    upgrade_rule: Optional[shared_upgradetargetingrule.UpgradeTargetingRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeRule') }})
    
