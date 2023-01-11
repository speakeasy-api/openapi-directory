import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import googlecloudvisionv1p2beta1inputconfig as shared_googlecloudvisionv1p2beta1inputconfig
from ..shared import googlecloudvisionv1p2beta1annotateimageresponse as shared_googlecloudvisionv1p2beta1annotateimageresponse


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1AnnotateFileResponse:
    r"""GoogleCloudVisionV1p2beta1AnnotateFileResponse
    Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
    """
    
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    input_config: Optional[shared_googlecloudvisionv1p2beta1inputconfig.GoogleCloudVisionV1p2beta1InputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    responses: Optional[list[shared_googlecloudvisionv1p2beta1annotateimageresponse.GoogleCloudVisionV1p2beta1AnnotateImageResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    total_pages: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPages') }})
    
