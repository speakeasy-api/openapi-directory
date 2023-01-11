import dataclasses
from enum import Enum

class CompositionEnumStatusEnum(str, Enum):
    ENQUEUED = "enqueued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"

