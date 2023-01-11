import dataclasses
from enum import Enum

class InteractionEnumTypeEnum(str, Enum):
    MESSAGE = "message"
    VOICE = "voice"
    UNKNOWN = "unknown"

