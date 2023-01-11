import dataclasses
from enum import Enum

class CodeScanningAlertStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    DISMISSED = "dismissed"
    FIXED = "fixed"

