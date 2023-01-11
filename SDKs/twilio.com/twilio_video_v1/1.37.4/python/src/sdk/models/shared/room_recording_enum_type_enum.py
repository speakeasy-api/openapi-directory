import dataclasses
from enum import Enum

class RoomRecordingEnumTypeEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

