import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1feature as shared_googlecloudvisionv1p2beta1feature
from ..shared import googlecloudvisionv1p2beta1imagecontext as shared_googlecloudvisionv1p2beta1imagecontext
from ..shared import googlecloudvisionv1p2beta1inputconfig as shared_googlecloudvisionv1p2beta1inputconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1AnnotateFileRequest:
    r"""GoogleCloudVisionV1p2beta1AnnotateFileRequest
    A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
    """
    
    features: Optional[list[shared_googlecloudvisionv1p2beta1feature.GoogleCloudVisionV1p2beta1Feature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image_context: Optional[shared_googlecloudvisionv1p2beta1imagecontext.GoogleCloudVisionV1p2beta1ImageContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    input_config: Optional[shared_googlecloudvisionv1p2beta1inputconfig.GoogleCloudVisionV1p2beta1InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    pages: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    
