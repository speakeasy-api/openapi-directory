import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1dominantcolorsannotation as shared_googlecloudvisionv1p1beta1dominantcolorsannotation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1ImageProperties:
    r"""GoogleCloudVisionV1p1beta1ImageProperties
    Stores image properties, such as dominant colors.
    """
    
    dominant_colors: Optional[shared_googlecloudvisionv1p1beta1dominantcolorsannotation.GoogleCloudVisionV1p1beta1DominantColorsAnnotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dominantColors') }})
    
