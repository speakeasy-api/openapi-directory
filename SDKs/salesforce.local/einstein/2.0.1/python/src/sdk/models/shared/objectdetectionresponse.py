import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectionresult as shared_detectionresult


@dataclass_json
@dataclasses.dataclass
class ObjectDetectionResponse:
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    probabilities: Optional[list[shared_detectionresult.DetectionResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilities') }})
    sample_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleId') }})
    
