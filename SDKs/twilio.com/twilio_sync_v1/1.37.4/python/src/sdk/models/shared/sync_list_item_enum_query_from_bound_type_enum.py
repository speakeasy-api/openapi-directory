import dataclasses
from enum import Enum

class SyncListItemEnumQueryFromBoundTypeEnum(str, Enum):
    INCLUSIVE = "inclusive"
    EXCLUSIVE = "exclusive"

