import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1asyncannotatefilerequest as shared_googlecloudvisionv1p2beta1asyncannotatefilerequest


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest:
    r"""GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest
    Multiple async file annotation requests are batched into a single service call.
    """
    
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    requests: Optional[list[shared_googlecloudvisionv1p2beta1asyncannotatefilerequest.GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
