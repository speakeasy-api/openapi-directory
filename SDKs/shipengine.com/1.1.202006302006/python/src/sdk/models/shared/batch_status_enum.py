import dataclasses
from enum import Enum

class BatchStatusEnum(str, Enum):
    OPEN = "open"
    QUEUED = "queued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    COMPLETED_WITH_ERRORS = "completed_with_errors"
    ARCHIVED = "archived"
    NOTIFYING = "notifying"
    INVALID = "invalid"

