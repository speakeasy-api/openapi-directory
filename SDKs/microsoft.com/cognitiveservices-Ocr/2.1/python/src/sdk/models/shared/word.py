import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WordConfidenceEnum(str, Enum):
    HIGH = "High"
    LOW = "Low"


@dataclass_json
@dataclasses.dataclass
class Word:
    r"""Word
    An object representing a recognized word.
    """
    
    bounding_box: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    confidence: Optional[WordConfidenceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    
