import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig:
    r"""GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig
    Config for TEXT_DETECTION.
    """
    
    language_hints: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageHints') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
