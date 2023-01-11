import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubmitJobOptionsCustomVocabularies:
    r"""SubmitJobOptionsCustomVocabularies
    Contains a collection of phrases. Custom vocabulary informs and biases the speech recognition to find those phrases (at the cost of slightly slower transcription).
    """
    
    phrases: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phrases') }})
    
class SubmitJobOptionsLanguageEnum(str, Enum):
    EN = "en"
    AR = "ar"
    BG = "bg"
    CA = "ca"
    CMN = "cmn"
    CS = "cs"
    DA = "da"
    DE = "de"
    EL = "el"
    ES = "es"
    FI = "fi"
    FR = "fr"
    HI = "hi"
    HR = "hr"
    HU = "hu"
    IT = "it"
    JA = "ja"
    KO = "ko"
    LT = "lt"
    LV = "lv"
    MS = "ms"
    NL = "nl"
    NO = "no"
    PL = "pl"
    PT = "pt"
    RO = "ro"
    RU = "ru"
    SK = "sk"
    SL = "sl"
    SV = "sv"
    TR = "tr"


@dataclass_json
@dataclasses.dataclass
class SubmitJobOptions:
    r"""SubmitJobOptions
    Rev.ai Job Options Object Model
    """
    
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    custom_vocabularies: Optional[list[SubmitJobOptionsCustomVocabularies]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_vocabularies') }})
    custom_vocabulary_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_vocabulary_id') }})
    delete_after_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_after_seconds') }})
    filter_profanity: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_profanity') }})
    language: Optional[SubmitJobOptionsLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    media_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_url') }})
    metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    remove_disfluencies: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_disfluencies') }})
    skip_diarization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_diarization') }})
    skip_punctuation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_punctuation') }})
    speaker_channels_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaker_channels_count') }})
    
