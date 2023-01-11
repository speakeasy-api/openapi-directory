import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audioconfig as shared_audioconfig
from ..shared import timepoint as shared_timepoint


@dataclass_json
@dataclasses.dataclass
class SynthesizeSpeechResponse:
    r"""SynthesizeSpeechResponse
    The message returned to the client by the `SynthesizeSpeech` method.
    """
    
    audio_config: Optional[shared_audioconfig.AudioConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    audio_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContent') }})
    timepoints: Optional[list[shared_timepoint.Timepoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timepoints') }})
    
