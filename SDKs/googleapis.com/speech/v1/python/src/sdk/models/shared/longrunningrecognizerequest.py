import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recognitionaudio as shared_recognitionaudio
from ..shared import recognitionconfig as shared_recognitionconfig
from ..shared import transcriptoutputconfig as shared_transcriptoutputconfig


@dataclass_json
@dataclasses.dataclass
class LongRunningRecognizeRequestInput:
    r"""LongRunningRecognizeRequestInput
    The top-level message sent by the client for the `LongRunningRecognize` method.
    """
    
    audio: Optional[shared_recognitionaudio.RecognitionAudio] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    config: Optional[shared_recognitionconfig.RecognitionConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    output_config: Optional[shared_transcriptoutputconfig.TranscriptOutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
