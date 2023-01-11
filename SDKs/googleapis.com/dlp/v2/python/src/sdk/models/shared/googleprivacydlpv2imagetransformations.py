import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2imagetransformation as shared_googleprivacydlpv2imagetransformation


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ImageTransformations:
    r"""GooglePrivacyDlpV2ImageTransformations
    A type of transformation that is applied over images.
    """
    
    transforms: Optional[list[shared_googleprivacydlpv2imagetransformation.GooglePrivacyDlpV2ImageTransformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transforms') }})
    
