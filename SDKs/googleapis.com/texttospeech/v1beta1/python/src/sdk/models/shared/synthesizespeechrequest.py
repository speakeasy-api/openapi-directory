import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audioconfig as shared_audioconfig
from ..shared import synthesisinput as shared_synthesisinput
from ..shared import voiceselectionparams as shared_voiceselectionparams

class SynthesizeSpeechRequestEnableTimePointingEnum(str, Enum):
    TIMEPOINT_TYPE_UNSPECIFIED = "TIMEPOINT_TYPE_UNSPECIFIED"
    SSML_MARK = "SSML_MARK"


@dataclass_json
@dataclasses.dataclass
class SynthesizeSpeechRequest:
    r"""SynthesizeSpeechRequest
    The top-level message sent by the client for the `SynthesizeSpeech` method.
    """
    
    audio_config: Optional[shared_audioconfig.AudioConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    enable_time_pointing: Optional[list[SynthesizeSpeechRequestEnableTimePointingEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTimePointing') }})
    input: Optional[shared_synthesisinput.SynthesisInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    voice: Optional[shared_voiceselectionparams.VoiceSelectionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    
