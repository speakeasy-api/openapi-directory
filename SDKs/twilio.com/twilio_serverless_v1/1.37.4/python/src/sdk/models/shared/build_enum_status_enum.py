import dataclasses
from enum import Enum

class BuildEnumStatusEnum(str, Enum):
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"

