import dataclasses
from enum import Enum

class UserStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING = "PENDING"

