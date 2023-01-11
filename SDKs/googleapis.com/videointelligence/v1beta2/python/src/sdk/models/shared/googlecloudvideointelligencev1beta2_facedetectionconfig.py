import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1beta2FaceDetectionConfig:
    r"""GoogleCloudVideointelligenceV1beta2FaceDetectionConfig
    Config for FACE_DETECTION.
    """
    
    include_attributes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeAttributes') }})
    include_bounding_boxes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeBoundingBoxes') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
