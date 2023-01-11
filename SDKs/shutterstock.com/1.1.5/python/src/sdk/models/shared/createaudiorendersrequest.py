import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createaudiorender as shared_createaudiorender


@dataclass_json
@dataclasses.dataclass
class CreateAudioRendersRequest:
    r"""CreateAudioRendersRequest
    Render request data
    """
    
    audio_renders: list[shared_createaudiorender.CreateAudioRender] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_renders') }})
    
