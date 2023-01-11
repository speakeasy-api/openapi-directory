import dataclasses
from enum import Enum

class ProjectStatusEnum(str, Enum):
    PENDING = "pending"
    STARTED = "started"
    COMPLETED = "completed"
    TRANSLATED = "translated"
    PROOFREAD = "proofread"

