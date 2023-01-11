import dataclasses
from enum import Enum

class PlayerStreamerEnumStatusEnum(str, Enum):
    CREATED = "created"
    STARTED = "started"
    ENDED = "ended"
    FAILED = "failed"

