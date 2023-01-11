import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p2beta1TextDetectionParams:
    r"""GoogleCloudVisionV1p2beta1TextDetectionParams
    Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
    """
    
    advanced_ocr_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedOcrOptions') }})
    enable_text_detection_confidence_score: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTextDetectionConfidenceScore') }})
    
