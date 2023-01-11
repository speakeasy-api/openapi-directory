import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recording_enum_recording_mode_enum as shared_recording_enum_recording_mode_enum
from ..shared import recording_enum_recording_trim_enum as shared_recording_enum_recording_trim_enum


@dataclass_json
@dataclasses.dataclass
class TrunkingV1TrunkRecording:
    mode: Optional[shared_recording_enum_recording_mode_enum.RecordingEnumRecordingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    trim: Optional[shared_recording_enum_recording_trim_enum.RecordingEnumRecordingTrimEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    
