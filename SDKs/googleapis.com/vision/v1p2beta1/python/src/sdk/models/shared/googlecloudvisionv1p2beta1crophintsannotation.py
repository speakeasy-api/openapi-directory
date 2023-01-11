import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1crophint as shared_googlecloudvisionv1p2beta1crophint


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1CropHintsAnnotation:
    r"""GoogleCloudVisionV1p2beta1CropHintsAnnotation
    Set of crop hints that are used to generate new crops when serving images.
    """
    
    crop_hints: Optional[list[shared_googlecloudvisionv1p2beta1crophint.GoogleCloudVisionV1p2beta1CropHint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHints') }})
    
