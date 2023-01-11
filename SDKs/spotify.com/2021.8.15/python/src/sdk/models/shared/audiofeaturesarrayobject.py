import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import audiofeaturesobject as shared_audiofeaturesobject


@dataclass_json
@dataclasses.dataclass
class AudioFeaturesArrayObject:
    audio_features: Optional[list[shared_audiofeaturesobject.AudioFeaturesObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_features') }})
    
