import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wordinfo as shared_wordinfo


@dataclass_json
@dataclasses.dataclass
class SpeechRecognitionAlternative:
    r"""SpeechRecognitionAlternative
    Alternative hypotheses (a.k.a. n-best list).
    """
    
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    transcript: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    words: Optional[list[shared_wordinfo.WordInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
