import dataclasses
from enum import Enum

class StreamEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    STOPPED = "stopped"

