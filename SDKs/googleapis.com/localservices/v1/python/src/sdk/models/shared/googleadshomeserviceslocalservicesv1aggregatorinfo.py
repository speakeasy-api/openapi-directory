import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAdsHomeservicesLocalservicesV1AggregatorInfo:
    r"""GoogleAdsHomeservicesLocalservicesV1AggregatorInfo
    Conatiner for aggregator specific information if lead is for an aggregator GLS account.
    """
    
    aggregator_provider_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregatorProviderId') }})
    
