import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2fieldtransformation as shared_googleprivacydlpv2fieldtransformation
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype
from ..shared import googleprivacydlpv2recordsuppression as shared_googleprivacydlpv2recordsuppression
from ..shared import googleprivacydlpv2summaryresult as shared_googleprivacydlpv2summaryresult
from ..shared import googleprivacydlpv2primitivetransformation as shared_googleprivacydlpv2primitivetransformation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2TransformationSummary:
    r"""GooglePrivacyDlpV2TransformationSummary
    Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
    """
    
    field: Optional[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    field_transformations: Optional[list[shared_googleprivacydlpv2fieldtransformation.GooglePrivacyDlpV2FieldTransformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTransformations') }})
    info_type: Optional[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    record_suppress: Optional[shared_googleprivacydlpv2recordsuppression.GooglePrivacyDlpV2RecordSuppression] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordSuppress') }})
    results: Optional[list[shared_googleprivacydlpv2summaryresult.GooglePrivacyDlpV2SummaryResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    transformation: Optional[shared_googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformation') }})
    transformed_bytes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformedBytes') }})
    
