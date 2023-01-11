import dataclasses
from enum import Enum

class RoomParticipantEnumStatusEnum(str, Enum):
    CONNECTED = "connected"
    DISCONNECTED = "disconnected"

