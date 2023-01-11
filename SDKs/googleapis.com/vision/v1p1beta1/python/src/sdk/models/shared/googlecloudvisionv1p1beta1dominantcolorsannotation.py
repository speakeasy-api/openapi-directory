import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1colorinfo as shared_googlecloudvisionv1p1beta1colorinfo


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1DominantColorsAnnotation:
    r"""GoogleCloudVisionV1p1beta1DominantColorsAnnotation
    Set of dominant colors and their corresponding scores.
    """
    
    colors: Optional[list[shared_googlecloudvisionv1p1beta1colorinfo.GoogleCloudVisionV1p1beta1ColorInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    
