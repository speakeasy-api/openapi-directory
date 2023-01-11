import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioConfigAudioEncodingEnum(str, Enum):
    AUDIO_ENCODING_UNSPECIFIED = "AUDIO_ENCODING_UNSPECIFIED"
    LINEAR16 = "LINEAR16"
    MP3 = "MP3"
    OGG_OPUS = "OGG_OPUS"
    MULAW = "MULAW"
    ALAW = "ALAW"


@dataclass_json
@dataclasses.dataclass
class AudioConfig:
    r"""AudioConfig
    Description of audio data to be synthesized.
    """
    
    audio_encoding: Optional[AudioConfigAudioEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioEncoding') }})
    effects_profile_id: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectsProfileId') }})
    pitch: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    speaking_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speakingRate') }})
    volume_gain_db: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeGainDb') }})
    
