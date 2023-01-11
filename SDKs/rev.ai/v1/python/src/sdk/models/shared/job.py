import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class JobFailureEnum(str, Enum):
    INTERNAL_PROCESSING = "internal_processing"
    DOWNLOAD_FAILURE = "download_failure"
    DURATION_EXCEEDED = "duration_exceeded"
    DURATION_TOO_SHORT = "duration_too_short"
    INVALID_MEDIA = "invalid_media"
    EMPTY_MEDIA = "empty_media"
    TRANSCRIPTION = "transcription"
    INSUFFICIENT_BALANCE = "insufficient_balance"
    INVOICING_LIMIT_EXCEEDED = "invoicing_limit_exceeded"

class JobLanguageEnum(str, Enum):
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

class JobStatusEnum(str, Enum):
    IN_PROGRESS = "in_progress"
    TRANSCRIBED = "transcribed"
    FAILED = "failed"

class JobTypeEnum(str, Enum):
    ASYNC = "async"


@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
    Rev.ai Transcription Job
    ***
    Note: properties are not displayed in the returned object if they are null
    
    """
    
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callback_url') }})
    completed_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_on') }})
    created_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_on') }})
    custom_vocabulary_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_vocabulary_id') }})
    delete_after_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_after_seconds') }})
    duration_seconds: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_seconds') }})
    failure: Optional[JobFailureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure') }})
    failure_detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure_detail') }})
    filter_profanity: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_profanity') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[JobLanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    media_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_url') }})
    metadata: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    remove_disfluencies: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_disfluencies') }})
    skip_diarization: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_diarization') }})
    skip_punctuation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skip_punctuation') }})
    speaker_channels_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaker_channels_count') }})
    status: Optional[JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[JobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
