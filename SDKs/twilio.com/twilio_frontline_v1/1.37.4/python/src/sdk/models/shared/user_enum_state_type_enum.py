import dataclasses
from enum import Enum

class UserEnumStateTypeEnum(str, Enum):
    ACTIVE = "active"
    DEACTIVATED = "deactivated"

