import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig:
    r"""GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig
    Config for SHOT_CHANGE_DETECTION.
    """
    
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
