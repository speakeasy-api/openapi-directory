import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2imagetransformations as shared_googleprivacydlpv2imagetransformations
from ..shared import googleprivacydlpv2infotypetransformations as shared_googleprivacydlpv2infotypetransformations
from ..shared import googleprivacydlpv2recordtransformations as shared_googleprivacydlpv2recordtransformations
from ..shared import googleprivacydlpv2transformationerrorhandling as shared_googleprivacydlpv2transformationerrorhandling


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2DeidentifyConfig:
    r"""GooglePrivacyDlpV2DeidentifyConfig
    The configuration that controls how the data will change.
    """
    
    image_transformations: Optional[shared_googleprivacydlpv2imagetransformations.GooglePrivacyDlpV2ImageTransformations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTransformations') }})
    info_type_transformations: Optional[shared_googleprivacydlpv2infotypetransformations.GooglePrivacyDlpV2InfoTypeTransformations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeTransformations') }})
    record_transformations: Optional[shared_googleprivacydlpv2recordtransformations.GooglePrivacyDlpV2RecordTransformations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordTransformations') }})
    transformation_error_handling: Optional[shared_googleprivacydlpv2transformationerrorhandling.GooglePrivacyDlpV2TransformationErrorHandling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformationErrorHandling') }})
    
