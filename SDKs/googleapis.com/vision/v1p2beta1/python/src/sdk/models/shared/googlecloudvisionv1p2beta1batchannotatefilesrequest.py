import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p2beta1annotatefilerequest as shared_googlecloudvisionv1p2beta1annotatefilerequest


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest:
    r"""GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest
    A list of requests to annotate files using the BatchAnnotateFiles API.
    """
    
    parent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    requests: Optional[list[shared_googlecloudvisionv1p2beta1annotatefilerequest.GoogleCloudVisionV1p2beta1AnnotateFileRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
