import dataclasses
from enum import Enum

class ProximityEnum(str, Enum):
    FAR = "far"
    NEAR = "near"
    IMMEDIATE = "immediate"

