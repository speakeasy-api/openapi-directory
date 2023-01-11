import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1percentageadjustment as shared_googlecloudchannelv1percentageadjustment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RepricingAdjustment:
    r"""GoogleCloudChannelV1RepricingAdjustment
    A type that represents the various adjustments you can apply to a bill.
    """
    
    percentage_adjustment: Optional[shared_googlecloudchannelv1percentageadjustment.GoogleCloudChannelV1PercentageAdjustment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageAdjustment') }})
    
