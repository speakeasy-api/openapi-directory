import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import speechrecognitionalternative as shared_speechrecognitionalternative


@dataclass_json
@dataclasses.dataclass
class SpeechRecognitionResult:
    r"""SpeechRecognitionResult
    A speech recognition result corresponding to a portion of the audio.
    """
    
    alternatives: Optional[list[shared_speechrecognitionalternative.SpeechRecognitionAlternative]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternatives') }})
    channel_tag: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    result_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultEndTime') }})
    
