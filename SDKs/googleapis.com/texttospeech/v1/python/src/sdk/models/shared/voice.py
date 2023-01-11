import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VoiceSsmlGenderEnum(str, Enum):
    SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED"
    MALE = "MALE"
    FEMALE = "FEMALE"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclasses.dataclass
class Voice:
    r"""Voice
    Description of a voice supported by the TTS service.
    """
    
    language_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodes') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    natural_sample_rate_hertz: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naturalSampleRateHertz') }})
    ssml_gender: Optional[VoiceSsmlGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlGender') }})
    
