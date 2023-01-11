import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1row as shared_googleclouddatalabelingv1beta1row


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ConfusionMatrix:
    r"""GoogleCloudDatalabelingV1beta1ConfusionMatrix
    Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
    """
    
    row: Optional[list[shared_googleclouddatalabelingv1beta1row.GoogleCloudDatalabelingV1beta1Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    
