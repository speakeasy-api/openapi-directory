import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdvertiserBillingConfig:
    r"""AdvertiserBillingConfig
    Billing related settings of an advertiser.
    """
    
    billing_profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingProfileId') }})
    
