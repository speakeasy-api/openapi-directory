import dataclasses
from enum import Enum

class EnabledRepositoriesEnum(str, Enum):
    ALL = "all"
    NONE = "none"
    SELECTED = "selected"

