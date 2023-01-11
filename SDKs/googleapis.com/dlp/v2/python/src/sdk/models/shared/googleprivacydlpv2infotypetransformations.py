import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2infotypetransformation as shared_googleprivacydlpv2infotypetransformation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2InfoTypeTransformations:
    r"""GooglePrivacyDlpV2InfoTypeTransformations
    A type of transformation that will scan unstructured text and apply various `PrimitiveTransformation`s to each finding, where the transformation is applied to only values that were identified as a specific info_type.
    """
    
    transformations: Optional[list[shared_googleprivacydlpv2infotypetransformation.GooglePrivacyDlpV2InfoTypeTransformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformations') }})
    
