import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1price as shared_googlecloudchannelv1price


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1PriceTier:
    r"""GoogleCloudChannelV1PriceTier
    Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.
    """
    
    first_resource: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstResource') }})
    last_resource: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastResource') }})
    price: Optional[shared_googlecloudchannelv1price.GoogleCloudChannelV1Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
