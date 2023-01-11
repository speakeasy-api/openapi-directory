import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Sentiment:
    r"""Sentiment
    Represents the feeling associated with the entire text or entities in the text. Next ID: 6
    """
    
    magnitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('magnitude') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
