import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1confusionmatrix as shared_googleclouddatalabelingv1beta1confusionmatrix
from ..shared import googleclouddatalabelingv1beta1prcurve as shared_googleclouddatalabelingv1beta1prcurve


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ClassificationMetrics:
    r"""GoogleCloudDatalabelingV1beta1ClassificationMetrics
    Metrics calculated for a classification model.
    """
    
    confusion_matrix: Optional[shared_googleclouddatalabelingv1beta1confusionmatrix.GoogleCloudDatalabelingV1beta1ConfusionMatrix] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confusionMatrix') }})
    pr_curve: Optional[shared_googleclouddatalabelingv1beta1prcurve.GoogleCloudDatalabelingV1beta1PrCurve] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prCurve') }})
    
