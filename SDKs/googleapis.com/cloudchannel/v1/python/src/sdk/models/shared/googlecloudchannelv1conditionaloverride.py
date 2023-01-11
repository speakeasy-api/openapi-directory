import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1repricingadjustment as shared_googlecloudchannelv1repricingadjustment
from ..shared import googlecloudchannelv1repricingcondition as shared_googlecloudchannelv1repricingcondition

class GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum(str, Enum):
    REBILLING_BASIS_UNSPECIFIED = "REBILLING_BASIS_UNSPECIFIED"
    COST_AT_LIST = "COST_AT_LIST"
    DIRECT_CUSTOMER_COST = "DIRECT_CUSTOMER_COST"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ConditionalOverride:
    r"""GoogleCloudChannelV1ConditionalOverride
    Specifies the override to conditionally apply.
    """
    
    adjustment: Optional[shared_googlecloudchannelv1repricingadjustment.GoogleCloudChannelV1RepricingAdjustment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    rebilling_basis: Optional[GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebillingBasis') }})
    repricing_condition: Optional[shared_googlecloudchannelv1repricingcondition.GoogleCloudChannelV1RepricingCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingCondition') }})
    
