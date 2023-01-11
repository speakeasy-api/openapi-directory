import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SpeechContext:
    r"""SpeechContext
    Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.
    """
    
    boost: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boost') }})
    phrases: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phrases') }})
    
