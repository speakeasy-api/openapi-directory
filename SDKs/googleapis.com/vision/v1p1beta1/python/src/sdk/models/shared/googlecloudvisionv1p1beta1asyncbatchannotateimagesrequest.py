import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1outputconfig as shared_googlecloudvisionv1p1beta1outputconfig
from ..shared import googlecloudvisionv1p1beta1annotateimagerequest as shared_googlecloudvisionv1p1beta1annotateimagerequest


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest:
    r"""GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest
    Request for async image annotation for a list of images.
    """
    
    output_config: Optional[shared_googlecloudvisionv1p1beta1outputconfig.GoogleCloudVisionV1p1beta1OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    requests: Optional[list[shared_googlecloudvisionv1p1beta1annotateimagerequest.GoogleCloudVisionV1p1beta1AnnotateImageRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
