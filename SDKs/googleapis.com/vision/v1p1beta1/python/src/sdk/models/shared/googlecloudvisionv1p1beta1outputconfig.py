import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvisionv1p1beta1gcsdestination as shared_googlecloudvisionv1p1beta1gcsdestination


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1OutputConfig:
    r"""GoogleCloudVisionV1p1beta1OutputConfig
    The desired output location and metadata.
    """
    
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    gcs_destination: Optional[shared_googlecloudvisionv1p1beta1gcsdestination.GoogleCloudVisionV1p1beta1GcsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    
