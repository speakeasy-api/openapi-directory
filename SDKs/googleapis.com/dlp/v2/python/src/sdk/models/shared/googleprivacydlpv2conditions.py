import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2condition as shared_googleprivacydlpv2condition


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2Conditions:
    r"""GooglePrivacyDlpV2Conditions
    A collection of conditions.
    """
    
    conditions: Optional[list[shared_googleprivacydlpv2condition.GooglePrivacyDlpV2Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
