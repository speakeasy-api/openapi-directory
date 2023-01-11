import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1feature as shared_googlecloudvisionv1p1beta1feature
from ..shared import googlecloudvisionv1p1beta1imagecontext as shared_googlecloudvisionv1p1beta1imagecontext
from ..shared import googlecloudvisionv1p1beta1inputconfig as shared_googlecloudvisionv1p1beta1inputconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1AnnotateFileRequest:
    r"""GoogleCloudVisionV1p1beta1AnnotateFileRequest
    A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
    """
    
    features: Optional[list[shared_googlecloudvisionv1p1beta1feature.GoogleCloudVisionV1p1beta1Feature]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image_context: Optional[shared_googlecloudvisionv1p1beta1imagecontext.GoogleCloudVisionV1p1beta1ImageContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    input_config: Optional[shared_googlecloudvisionv1p1beta1inputconfig.GoogleCloudVisionV1p1beta1InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    pages: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    
