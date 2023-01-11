import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2recordcondition as shared_googleprivacydlpv2recordcondition


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RecordSuppression:
    r"""GooglePrivacyDlpV2RecordSuppression
    Configuration to suppress records whose suppression conditions evaluate to true.
    """
    
    condition: Optional[shared_googleprivacydlpv2recordcondition.GooglePrivacyDlpV2RecordCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    
