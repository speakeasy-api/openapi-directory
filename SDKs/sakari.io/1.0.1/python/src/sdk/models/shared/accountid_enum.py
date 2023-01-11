import dataclasses
from enum import Enum

class AccountIDEnum(str, Enum):
    APPEND = "append"
    CORE = "core"
    REMOVE = "remove"

