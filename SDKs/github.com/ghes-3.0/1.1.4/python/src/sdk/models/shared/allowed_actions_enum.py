import dataclasses
from enum import Enum

class AllowedActionsEnum(str, Enum):
    ALL = "all"
    LOCAL_ONLY = "local_only"
    SELECTED = "selected"

