import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AttributeParametersScoreTypeEnum(str, Enum):
    SCORE_TYPE_UNSPECIFIED = "SCORE_TYPE_UNSPECIFIED"
    PROBABILITY = "PROBABILITY"
    STD_DEV_SCORE = "STD_DEV_SCORE"
    PERCENTILE = "PERCENTILE"
    RAW = "RAW"


@dataclass_json
@dataclasses.dataclass
class AttributeParameters:
    score_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreThreshold') }})
    score_type: Optional[AttributeParametersScoreTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreType') }})
    
