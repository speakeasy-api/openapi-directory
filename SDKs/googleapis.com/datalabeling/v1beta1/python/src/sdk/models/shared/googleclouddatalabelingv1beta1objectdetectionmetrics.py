import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1prcurve as shared_googleclouddatalabelingv1beta1prcurve


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics:
    r"""GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics
    Metrics calculated for an image object detection (bounding box) model.
    """
    
    pr_curve: Optional[shared_googleclouddatalabelingv1beta1prcurve.GoogleCloudDatalabelingV1beta1PrCurve] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prCurve') }})
    
