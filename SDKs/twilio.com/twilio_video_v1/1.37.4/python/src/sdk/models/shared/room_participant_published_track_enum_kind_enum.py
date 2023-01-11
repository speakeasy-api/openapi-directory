import dataclasses
from enum import Enum

class RoomParticipantPublishedTrackEnumKindEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

