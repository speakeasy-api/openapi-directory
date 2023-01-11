import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1dataset as shared_googleclouddatalabelingv1beta1dataset


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1CreateDatasetRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateDatasetRequest
    Request message for CreateDataset.
    """
    
    dataset: Optional[shared_googleclouddatalabelingv1beta1dataset.GoogleCloudDatalabelingV1beta1Dataset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    
