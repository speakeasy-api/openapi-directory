import dataclasses
from enum import Enum

class RecordingEnumTypeEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

