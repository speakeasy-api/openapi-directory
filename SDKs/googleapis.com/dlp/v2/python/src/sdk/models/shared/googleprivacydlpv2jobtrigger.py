import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2error as shared_googleprivacydlpv2error
from ..shared import googleprivacydlpv2inspectjobconfig as shared_googleprivacydlpv2inspectjobconfig
from ..shared import googleprivacydlpv2trigger as shared_googleprivacydlpv2trigger

class GooglePrivacyDlpV2JobTriggerStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    PAUSED = "PAUSED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2JobTrigger:
    r"""GooglePrivacyDlpV2JobTrigger
    Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    errors: Optional[list[shared_googleprivacydlpv2error.GooglePrivacyDlpV2Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inspect_job: Optional[shared_googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectJob') }})
    last_run_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[GooglePrivacyDlpV2JobTriggerStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    triggers: Optional[list[shared_googleprivacydlpv2trigger.GooglePrivacyDlpV2Trigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2JobTriggerInput:
    r"""GooglePrivacyDlpV2JobTriggerInput
    Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    inspect_job: Optional[shared_googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectJob') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[GooglePrivacyDlpV2JobTriggerStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    triggers: Optional[list[shared_googleprivacydlpv2trigger.GooglePrivacyDlpV2Trigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    
