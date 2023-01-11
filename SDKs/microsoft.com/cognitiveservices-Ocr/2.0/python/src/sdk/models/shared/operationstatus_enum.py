import dataclasses
from enum import Enum

class OperationStatusEnum(str, Enum):
    NOT_STARTED = "NotStarted"
    RUNNING = "Running"
    FAILED = "Failed"
    SUCCEEDED = "Succeeded"

