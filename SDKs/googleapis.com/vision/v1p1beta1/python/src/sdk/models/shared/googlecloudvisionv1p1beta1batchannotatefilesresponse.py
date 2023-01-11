import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1annotatefileresponse as shared_googlecloudvisionv1p1beta1annotatefileresponse


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse:
    r"""GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse
    A list of file annotation responses.
    """
    
    responses: Optional[list[shared_googlecloudvisionv1p1beta1annotatefileresponse.GoogleCloudVisionV1p1beta1AnnotateFileResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
