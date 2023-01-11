import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1skugroupcondition as shared_googlecloudchannelv1skugroupcondition


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1RepricingCondition:
    r"""GoogleCloudChannelV1RepricingCondition
    Represents the various repricing conditions you can use for a conditional override.
    """
    
    sku_group_condition: Optional[shared_googlecloudchannelv1skugroupcondition.GoogleCloudChannelV1SkuGroupCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuGroupCondition') }})
    
