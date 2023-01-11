import dataclasses
from enum import Enum

class CodeScanningAlertSetStateEnum(str, Enum):
    OPEN = "open"
    DISMISSED = "dismissed"

