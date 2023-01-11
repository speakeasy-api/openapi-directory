import dataclasses
from enum import Enum

class TargetTypeEnum(str, Enum):
    FREE = "free"
    SINGLE = "single"
    MULTI = "multi"

