import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import alertstrategy as shared_alertstrategy
from ..shared import condition as shared_condition
from ..shared import mutationrecord as shared_mutationrecord
from ..shared import documentation as shared_documentation
from ..shared import status as shared_status

class AlertPolicyCombinerEnum(str, Enum):
    COMBINE_UNSPECIFIED = "COMBINE_UNSPECIFIED"
    AND = "AND"
    OR = "OR"
    AND_WITH_MATCHING_RESOURCE = "AND_WITH_MATCHING_RESOURCE"


@dataclass_json
@dataclasses.dataclass
class AlertPolicy:
    r"""AlertPolicy
    A description of the conditions under which some aspect of your system is considered to be \"unhealthy\" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
    """
    
    alert_strategy: Optional[shared_alertstrategy.AlertStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertStrategy') }})
    combiner: Optional[AlertPolicyCombinerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combiner') }})
    conditions: Optional[list[shared_condition.Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    creation_record: Optional[shared_mutationrecord.MutationRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationRecord') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    documentation: Optional[shared_documentation.Documentation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    mutation_record: Optional[shared_mutationrecord.MutationRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationRecord') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_channels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationChannels') }})
    user_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    validity: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    
