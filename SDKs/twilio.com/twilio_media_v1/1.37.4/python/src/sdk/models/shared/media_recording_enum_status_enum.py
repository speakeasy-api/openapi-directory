import dataclasses
from enum import Enum

class MediaRecordingEnumStatusEnum(str, Enum):
    PROCESSING = "processing"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"

