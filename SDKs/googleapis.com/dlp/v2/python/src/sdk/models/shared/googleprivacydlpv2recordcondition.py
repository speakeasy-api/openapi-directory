import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2expressions as shared_googleprivacydlpv2expressions


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RecordCondition:
    r"""GooglePrivacyDlpV2RecordCondition
    A condition for determining whether a transformation should be applied to a field.
    """
    
    expressions: Optional[shared_googleprivacydlpv2expressions.GooglePrivacyDlpV2Expressions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressions') }})
    
