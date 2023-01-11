import dataclasses
from enum import Enum

class SummaryEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    PARTIAL = "partial"

