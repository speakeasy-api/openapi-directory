import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotype as shared_googleprivacydlpv2infotype
from ..shared import googleprivacydlpv2primitivetransformation as shared_googleprivacydlpv2primitivetransformation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InfoTypeTransformation:
    r"""GooglePrivacyDlpV2InfoTypeTransformation
    A transformation to apply to text that is identified as a specific info_type.
    """
    
    info_types: Optional[list[shared_googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    primitive_transformation: Optional[shared_googleprivacydlpv2primitivetransformation.GooglePrivacyDlpV2PrimitiveTransformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitiveTransformation') }})
    
