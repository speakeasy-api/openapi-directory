import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1annotateimageresponse as shared_googlecloudvisionv1p1beta1annotateimageresponse


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse:
    r"""GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse
    Response to a batch image annotation request.
    """
    
    responses: Optional[list[shared_googlecloudvisionv1p1beta1annotateimageresponse.GoogleCloudVisionV1p1beta1AnnotateImageResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
