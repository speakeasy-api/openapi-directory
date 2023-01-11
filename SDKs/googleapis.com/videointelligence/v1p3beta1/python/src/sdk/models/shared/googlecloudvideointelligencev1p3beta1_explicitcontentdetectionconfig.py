import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig:
    r"""GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig
    Config for EXPLICIT_CONTENT_DETECTION.
    """
    
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
