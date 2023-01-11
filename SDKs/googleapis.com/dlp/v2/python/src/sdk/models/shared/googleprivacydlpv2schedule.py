import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Schedule:
    r"""GooglePrivacyDlpV2Schedule
    Schedule for inspect job triggers.
    """
    
    recurrence_period_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrencePeriodDuration') }})
    
