import dataclasses
from enum import Enum

class OrgClassificationEnum(str, Enum):
    LEGISLATURE = "legislature"
    EXECUTIVE = "executive"
    LOWER = "lower"
    UPPER = "upper"
    GOVERNMENT = "government"

