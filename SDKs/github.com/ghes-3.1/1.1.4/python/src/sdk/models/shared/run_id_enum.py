import dataclasses
from enum import Enum

class RunIDEnum(str, Enum):
    LATEST = "latest"
    ALL = "all"

