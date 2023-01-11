import dataclasses
from enum import Enum

class VoiceStatusEnum(str, Enum):
    ANSWERED = "answered"
    MACHINE = "machine"
    ERROR = "error"
    FAILED = "failed"

