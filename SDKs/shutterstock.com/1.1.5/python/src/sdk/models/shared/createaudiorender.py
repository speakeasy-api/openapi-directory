import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiorendertimeline as shared_audiorendertimeline

class CreateAudioRenderPresetEnum(str, Enum):
    MASTER_MP3 = "MASTER_MP3"
    MASTER_WAV = "MASTER_WAV"
    STEMS_WAV = "STEMS_WAV"


@dataclass_json
@dataclasses.dataclass
class CreateAudioRender:
    r"""CreateAudioRender
    Data required to create an audio render
    """
    
    filename: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    preset: CreateAudioRenderPresetEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preset') }})
    timeline: shared_audiorendertimeline.AudioRenderTimeline = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline') }})
    
