import dataclasses
from enum import Enum

class LabelStatusEnum(str, Enum):
    PROCESSING = "processing"
    COMPLETED = "completed"
    ERROR = "error"
    VOIDED = "voided"

