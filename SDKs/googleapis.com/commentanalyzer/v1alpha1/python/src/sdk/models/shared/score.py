import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ScoreTypeEnum(str, Enum):
    SCORE_TYPE_UNSPECIFIED = "SCORE_TYPE_UNSPECIFIED"
    PROBABILITY = "PROBABILITY"
    STD_DEV_SCORE = "STD_DEV_SCORE"
    PERCENTILE = "PERCENTILE"
    RAW = "RAW"


@dataclass_json
@dataclasses.dataclass
class Score:
    r"""Score
    Analysis scores are described by a value and a ScoreType.
    """
    
    type: Optional[ScoreTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
