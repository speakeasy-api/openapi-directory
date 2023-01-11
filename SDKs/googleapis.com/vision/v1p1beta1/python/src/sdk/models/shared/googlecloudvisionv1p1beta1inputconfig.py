import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1gcssource as shared_googlecloudvisionv1p1beta1gcssource


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1InputConfig:
    r"""GoogleCloudVisionV1p1beta1InputConfig
    The desired input location and metadata.
    """
    
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    gcs_source: Optional[shared_googlecloudvisionv1p1beta1gcssource.GoogleCloudVisionV1p1beta1GcsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
