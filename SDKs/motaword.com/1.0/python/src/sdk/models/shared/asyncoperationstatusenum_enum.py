import dataclasses
from enum import Enum

class AsyncOperationStatusEnumEnum(str, Enum):
    SENT = "sent"
    STARTED = "started"
    COMPLETED = "completed"
    FAILED = "failed"

