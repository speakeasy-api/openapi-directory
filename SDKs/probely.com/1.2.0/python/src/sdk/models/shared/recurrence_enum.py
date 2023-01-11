import dataclasses
from enum import Enum

class RecurrenceEnum(str, Enum):
    D = "d"
    W = "w"
    M = "m"
    Q = "q"
    UNKNOWN = ""

