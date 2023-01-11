import dataclasses
from enum import Enum

class CallSummariesEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    PARTIAL = "partial"

