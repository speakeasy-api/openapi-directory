import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customvoiceparams as shared_customvoiceparams

class VoiceSelectionParamsSsmlGenderEnum(str, Enum):
    SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED"
    MALE = "MALE"
    FEMALE = "FEMALE"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclasses.dataclass
class VoiceSelectionParams:
    r"""VoiceSelectionParams
    Description of which voice to use for a synthesis request.
    """
    
    custom_voice: Optional[shared_customvoiceparams.CustomVoiceParams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVoice') }})
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssml_gender: Optional[VoiceSelectionParamsSsmlGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlGender') }})
    
