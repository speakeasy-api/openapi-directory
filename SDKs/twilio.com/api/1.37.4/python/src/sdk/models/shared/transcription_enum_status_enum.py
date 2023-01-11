import dataclasses
from enum import Enum

class TranscriptionEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    FAILED = "failed"

