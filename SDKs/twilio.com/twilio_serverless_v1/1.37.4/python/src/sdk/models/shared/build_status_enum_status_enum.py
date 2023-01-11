import dataclasses
from enum import Enum

class BuildStatusEnumStatusEnum(str, Enum):
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"

