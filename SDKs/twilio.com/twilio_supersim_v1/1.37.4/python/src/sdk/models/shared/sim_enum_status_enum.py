import dataclasses
from enum import Enum

class SimEnumStatusEnum(str, Enum):
    NEW = "new"
    READY = "ready"
    ACTIVE = "active"
    INACTIVE = "inactive"
    SCHEDULED = "scheduled"

