import dataclasses
from enum import Enum

class RoomParticipantSubscribedTrackEnumKindEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

