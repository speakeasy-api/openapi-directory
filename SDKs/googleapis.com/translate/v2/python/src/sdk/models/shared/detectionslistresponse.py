import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detectionsresource as shared_detectionsresource


@dataclass_json
@dataclasses.dataclass
class DetectionsListResponse:
    detections: Optional[list[list[shared_detectionsresource.DetectionsResource]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detections') }})
    
