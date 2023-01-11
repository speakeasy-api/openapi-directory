import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AudioRenderTimelineSpanRegionEndTypeEventEnum(str, Enum):
    ENDING = "ending"
    TRANSITION = "transition"

class AudioRenderTimelineSpanRegionEndTypeTypeEnum(str, Enum):
    RINGOUT = "ringout"
    CUT = "cut"


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpanRegionEndType:
    r"""AudioRenderTimelineSpanRegionEndType
    A high-level description of how a region ends
    """
    
    beat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beat') }})
    event: AudioRenderTimelineSpanRegionEndTypeEventEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    type: AudioRenderTimelineSpanRegionEndTypeTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum(str, Enum):
    DOUBLE_FLAT = "double flat"
    FLAT = "flat"
    NATURAL = "natural"
    SHARP = "sharp"
    DOUBLE_SHARP = "double sharp"

class AudioRenderTimelineSpanRegionKeyTonicNoteEnum(str, Enum):
    C = "c"
    D = "d"
    E = "e"
    F = "f"
    G = "g"
    A = "a"
    B = "b"

class AudioRenderTimelineSpanRegionKeyTonicQualityEnum(str, Enum):
    MAJOR = "major"
    NATURAL_MINOR = "natural_minor"
    HARMONIC_MINOR = "harmonic_minor"
    MELODIC_MINOR = "melodic_minor"
    IONIAN = "ionian"
    DORIAN = "dorian"
    PHRYGIAN = "phrygian"
    LYDIAN = "lydian"
    MIXOLYDIAN = "mixolydian"
    AEOLIAN = "aeolian"
    LOCRIAN = "locrian"


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpanRegionKey:
    r"""AudioRenderTimelineSpanRegionKey
    The key signature active at the beginning of the region
    """
    
    tonic_accidental: Optional[AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tonic_accidental') }})
    tonic_note: Optional[AudioRenderTimelineSpanRegionKeyTonicNoteEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tonic_note') }})
    tonic_quality: Optional[AudioRenderTimelineSpanRegionKeyTonicQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tonic_quality') }})
    
class AudioRenderTimelineSpanRegionRegionEnum(str, Enum):
    MUSIC = "music"
    SILENCE = "silence"


@dataclass_json
@dataclasses.dataclass
class AudioRenderTimelineSpanRegion:
    r"""AudioRenderTimelineSpanRegion
    A period of music or silence, measured in beats
    """
    
    beat: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beat') }})
    descriptor: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptor') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    region: AudioRenderTimelineSpanRegionRegionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    end_type: Optional[AudioRenderTimelineSpanRegionEndType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_type') }})
    key: Optional[AudioRenderTimelineSpanRegionKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
