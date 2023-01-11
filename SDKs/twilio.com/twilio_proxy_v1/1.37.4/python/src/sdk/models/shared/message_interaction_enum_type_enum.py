import dataclasses
from enum import Enum

class MessageInteractionEnumTypeEnum(str, Enum):
    MESSAGE = "message"
    VOICE = "voice"
    UNKNOWN = "unknown"

