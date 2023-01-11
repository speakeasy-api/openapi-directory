import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig:
    r"""GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig
    Config for OBJECT_TRACKING.
    """
    
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
