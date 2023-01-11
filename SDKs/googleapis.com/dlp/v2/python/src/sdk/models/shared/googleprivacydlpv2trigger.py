import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2schedule as shared_googleprivacydlpv2schedule


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Trigger:
    r"""GooglePrivacyDlpV2Trigger
    What event needs to occur for a new job to be started.
    """
    
    manual: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manual') }})
    schedule: Optional[shared_googleprivacydlpv2schedule.GooglePrivacyDlpV2Schedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
