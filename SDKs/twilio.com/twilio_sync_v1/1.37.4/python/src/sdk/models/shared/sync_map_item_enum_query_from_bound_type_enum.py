import dataclasses
from enum import Enum

class SyncMapItemEnumQueryFromBoundTypeEnum(str, Enum):
    INCLUSIVE = "inclusive"
    EXCLUSIVE = "exclusive"

