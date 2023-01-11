import dataclasses
from enum import Enum

class EventObjectTypeEnum(str, Enum):
    USER = "user"
    TARGET = "target"
    SCAN = "scan"
    FINDING = "finding"

