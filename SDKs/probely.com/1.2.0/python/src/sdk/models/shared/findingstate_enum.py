import dataclasses
from enum import Enum

class FindingStateEnum(str, Enum):
    NOTFIXED = "notfixed"
    INVALID = "invalid"
    ACCEPTED = "accepted"
    FIXED = "fixed"

