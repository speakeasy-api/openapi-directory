import dataclasses
from enum import Enum

class SecretScanningAlertStateEnum(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"

