import dataclasses
from enum import Enum

class EnabledOrganizationsEnum(str, Enum):
    ALL = "all"
    NONE = "none"
    SELECTED = "selected"

