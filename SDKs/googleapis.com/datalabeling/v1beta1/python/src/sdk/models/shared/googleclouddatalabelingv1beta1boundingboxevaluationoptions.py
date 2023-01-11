import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions:
    r"""GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
    Options regarding evaluation between bounding boxes.
    """
    
    iou_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iouThreshold') }})
    
