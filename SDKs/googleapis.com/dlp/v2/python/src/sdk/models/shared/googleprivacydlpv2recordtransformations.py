import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldtransformation as shared_googleprivacydlpv2fieldtransformation
from ..shared import googleprivacydlpv2recordsuppression as shared_googleprivacydlpv2recordsuppression


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2RecordTransformations:
    r"""GooglePrivacyDlpV2RecordTransformations
    A type of transformation that is applied over structured data such as a table.
    """
    
    field_transformations: Optional[list[shared_googleprivacydlpv2fieldtransformation.GooglePrivacyDlpV2FieldTransformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTransformations') }})
    record_suppressions: Optional[list[shared_googleprivacydlpv2recordsuppression.GooglePrivacyDlpV2RecordSuppression]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordSuppressions') }})
    
