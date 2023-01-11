import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload:
    r"""GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload
    Payload specific to Youtube products.
    """
    
    partner_eligibility_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerEligibilityIds') }})
    
