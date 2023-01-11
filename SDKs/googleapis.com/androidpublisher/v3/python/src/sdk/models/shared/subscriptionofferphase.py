import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import otherregionssubscriptionofferphaseconfig as shared_otherregionssubscriptionofferphaseconfig
from ..shared import regionalsubscriptionofferphaseconfig as shared_regionalsubscriptionofferphaseconfig


@dataclass_json
@dataclasses.dataclass
class SubscriptionOfferPhase:
    r"""SubscriptionOfferPhase
    A single phase of a subscription offer.
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    other_regions_config: Optional[shared_otherregionssubscriptionofferphaseconfig.OtherRegionsSubscriptionOfferPhaseConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherRegionsConfig') }})
    recurrence_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrenceCount') }})
    regional_configs: Optional[list[shared_regionalsubscriptionofferphaseconfig.RegionalSubscriptionOfferPhaseConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalConfigs') }})
    
