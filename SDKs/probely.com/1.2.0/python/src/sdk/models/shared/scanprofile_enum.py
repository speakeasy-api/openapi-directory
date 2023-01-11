import dataclasses
from enum import Enum

class ScanProfileEnum(str, Enum):
    SAFE = "safe"
    NORMAL = "normal"
    FULL = "full"
    LIGHTNING = "lightning"

