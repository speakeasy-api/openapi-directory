import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1gcsdestination as shared_googleclouddatalabelingv1beta1gcsdestination
from ..shared import googleclouddatalabelingv1beta1gcsfolderdestination as shared_googleclouddatalabelingv1beta1gcsfolderdestination


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1OutputConfig:
    r"""GoogleCloudDatalabelingV1beta1OutputConfig
    The configuration of output data.
    """
    
    gcs_destination: Optional[shared_googleclouddatalabelingv1beta1gcsdestination.GoogleCloudDatalabelingV1beta1GcsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    gcs_folder_destination: Optional[shared_googleclouddatalabelingv1beta1gcsfolderdestination.GoogleCloudDatalabelingV1beta1GcsFolderDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFolderDestination') }})
    
