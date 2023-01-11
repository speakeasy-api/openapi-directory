import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2recordcondition as shared_googleprivacydlpv2recordcondition
from ..shared import googleprivacydlpv2fieldid as shared_googleprivacydlpv2fieldid
from ..shared import googleprivacydlpv2infotypetransformations as shared_googleprivacydlpv2infotypetransformations
from ..shared import googleprivacydlpv2primitivetransformation as shared_googleprivacydlpv2primitivetransformation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2FieldTransformation:
    r"""GooglePrivacyDlpV2FieldTransformation
    The transformation to apply to the field.
    """
    
    condition: Optional[shared_googleprivacydlpv2recordcondition.GooglePrivacyDlpV2RecordCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    fields: Optional[list[shared_googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    info_type_transformations: Optional[shared_googleprivacydlpv2infotypetransformations.GooglePrivacyDlpV2InfoTypeTransformations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeTransformations') }})
    primitive_transformation: Optional[shared_googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitiveTransformation') }})
    
