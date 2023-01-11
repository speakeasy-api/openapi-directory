import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audioconfig as shared_audioconfig
from ..shared import synthesisinput as shared_synthesisinput
from ..shared import voiceselectionparams as shared_voiceselectionparams


@dataclass_json
@dataclasses.dataclass
class SynthesizeLongAudioRequest:
    r"""SynthesizeLongAudioRequest
    The top-level message sent by the client for the `SynthesizeLongAudio` method.
    """
    
    audio_config: Optional[shared_audioconfig.AudioConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    input: Optional[shared_synthesisinput.SynthesisInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    output_gcs_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputGcsUri') }})
    voice: Optional[shared_voiceselectionparams.VoiceSelectionParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    
