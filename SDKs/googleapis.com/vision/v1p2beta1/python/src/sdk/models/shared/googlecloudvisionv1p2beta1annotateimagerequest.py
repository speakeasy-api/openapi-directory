import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1feature as shared_googlecloudvisionv1p2beta1feature
from ..shared import googlecloudvisionv1p2beta1image as shared_googlecloudvisionv1p2beta1image
from ..shared import googlecloudvisionv1p2beta1imagecontext as shared_googlecloudvisionv1p2beta1imagecontext


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1AnnotateImageRequest:
    r"""GoogleCloudVisionV1p2beta1AnnotateImageRequest
    Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
    """
    
    features: Optional[list[shared_googlecloudvisionv1p2beta1feature.GoogleCloudVisionV1p2beta1Feature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image: Optional[shared_googlecloudvisionv1p2beta1image.GoogleCloudVisionV1p2beta1Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_context: Optional[shared_googlecloudvisionv1p2beta1imagecontext.GoogleCloudVisionV1p2beta1ImageContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    
