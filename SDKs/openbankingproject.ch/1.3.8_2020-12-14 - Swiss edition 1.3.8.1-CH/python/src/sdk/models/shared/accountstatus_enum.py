import dataclasses
from enum import Enum

class AccountStatusEnum(str, Enum):
    ENABLED = "enabled"
    DELETED = "deleted"
    BLOCKED = "blocked"

