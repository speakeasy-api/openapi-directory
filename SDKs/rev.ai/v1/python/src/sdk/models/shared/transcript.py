import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TranscriptMonologuesElementsTypeEnum(str, Enum):
    TEXT = "text"
    PUNCT = "punct"
    UNKNOWN = "unknown"


@dataclass_json
@dataclasses.dataclass
class TranscriptMonologuesElements:
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    ts: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ts') }})
    ts_end: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ts_end') }})
    type: Optional[TranscriptMonologuesElementsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class TranscriptMonologues:
    elements: Optional[list[TranscriptMonologuesElements]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    speaker: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speaker') }})
    

@dataclass_json
@dataclasses.dataclass
class Transcript:
    r"""Transcript
    Rev.ai Transcript Model
    ***
    Note: properties are not displayed in the returned object if they are null
    
    Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.
    
    """
    
    monologues: Optional[list[TranscriptMonologues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monologues') }})
    
