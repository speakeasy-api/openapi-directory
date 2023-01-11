import dataclasses
from enum import Enum

class ScanStatusEnum(str, Enum):
    QUEUED = "queued"
    STARTED = "started"
    UNDER_REVIEW = "under_review"
    COMPLETED = "completed"
    COMPLETED_WITH_ERRORS = "completed_with_errors"
    FAILED = "failed"
    CANCELED = "canceled"
    CANCELING = "canceling"

