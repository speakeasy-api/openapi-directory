import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1CropHintsParams:
    r"""GoogleCloudVisionV1p1beta1CropHintsParams
    Parameters for crop hints annotation request.
    """
    
    aspect_ratios: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRatios') }})
    
