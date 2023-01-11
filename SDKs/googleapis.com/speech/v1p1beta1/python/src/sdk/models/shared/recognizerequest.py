import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recognitionaudio as shared_recognitionaudio
from ..shared import recognitionconfig as shared_recognitionconfig


@dataclass_json
@dataclasses.dataclass
class RecognizeRequestInput:
    r"""RecognizeRequestInput
    The top-level message sent by the client for the `Recognize` method.
    """
    
    audio: Optional[shared_recognitionaudio.RecognitionAudio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    config: Optional[shared_recognitionconfig.RecognitionConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    
