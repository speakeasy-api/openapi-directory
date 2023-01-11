import dataclasses
from enum import Enum

class AccountEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    SUSPENDED = "suspended"
    CLOSED = "closed"

