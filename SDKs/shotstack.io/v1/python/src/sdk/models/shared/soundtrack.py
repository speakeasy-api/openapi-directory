import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SoundtrackEffectEnum(str, Enum):
    FADE_IN = "fadeIn"
    FADE_OUT = "fadeOut"
    FADE_IN_FADE_OUT = "fadeInFadeOut"


@dataclass_json
@dataclasses.dataclass
class Soundtrack:
    r"""Soundtrack
    A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
    """
    
    src: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    effect: Optional[SoundtrackEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    volume: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
