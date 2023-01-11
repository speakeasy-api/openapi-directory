import dataclasses
from enum import Enum

class RoomRecordingEnumStatusEnum(str, Enum):
    PROCESSING = "processing"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"

