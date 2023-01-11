import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Proximity:
    r"""GooglePrivacyDlpV2Proximity
    Message for specifying a window around a finding to apply a detection rule.
    """
    
    window_after: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowAfter') }})
    window_before: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowBefore') }})
    
