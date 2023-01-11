import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SpeakerDiarizationConfigInput:
    r"""SpeakerDiarizationConfigInput
    Config to enable speaker diarization.
    """
    
    enable_speaker_diarization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpeakerDiarization') }})
    max_speaker_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSpeakerCount') }})
    min_speaker_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSpeakerCount') }})
    
