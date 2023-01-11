import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LicenseAudioLicenseEnum(str, Enum):
    AUDIO_PLATFORM = "audio_platform"
    PREMIER_MUSIC_BASIC = "premier_music_basic"
    PREMIER_MUSIC_EXTENDED = "premier_music_extended"
    PREMIER_MUSIC_PRO = "premier_music_pro"
    PREMIER_MUSIC_COMP = "premier_music_comp"


@dataclass_json
@dataclasses.dataclass
class LicenseAudio:
    r"""LicenseAudio
    An audio track in a licensing request
    """
    
    audio_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_id') }})
    license: Optional[LicenseAudioLicenseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    search_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_id') }})
    
