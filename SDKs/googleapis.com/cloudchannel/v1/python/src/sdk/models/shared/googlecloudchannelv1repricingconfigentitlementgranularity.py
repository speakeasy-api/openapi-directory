import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RepricingConfigEntitlementGranularity:
    r"""GoogleCloudChannelV1RepricingConfigEntitlementGranularity
    Applies the repricing configuration at the entitlement level.
    """
    
    entitlement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlement') }})
    
