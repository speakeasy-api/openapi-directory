import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebasefcmdatav1beta1deliveryperformancepercents as shared_googlefirebasefcmdatav1beta1deliveryperformancepercents
from ..shared import googlefirebasefcmdatav1beta1messageinsightpercents as shared_googlefirebasefcmdatav1beta1messageinsightpercents
from ..shared import googlefirebasefcmdatav1beta1messageoutcomepercents as shared_googlefirebasefcmdatav1beta1messageoutcomepercents


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseFcmDataV1beta1Data:
    r"""GoogleFirebaseFcmDataV1beta1Data
    Data detailing messaging delivery
    """
    
    count_messages_accepted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countMessagesAccepted') }})
    delivery_performance_percents: Optional[shared_googlefirebasefcmdatav1beta1deliveryperformancepercents.GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPerformancePercents') }})
    message_insight_percents: Optional[shared_googlefirebasefcmdatav1beta1messageinsightpercents.GoogleFirebaseFcmDataV1beta1MessageInsightPercents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageInsightPercents') }})
    message_outcome_percents: Optional[shared_googlefirebasefcmdatav1beta1messageoutcomepercents.GoogleFirebaseFcmDataV1beta1MessageOutcomePercents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageOutcomePercents') }})
    
