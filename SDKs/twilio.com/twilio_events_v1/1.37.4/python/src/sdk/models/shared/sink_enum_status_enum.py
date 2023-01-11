import dataclasses
from enum import Enum

class SinkEnumStatusEnum(str, Enum):
    INITIALIZED = "initialized"
    VALIDATING = "validating"
    ACTIVE = "active"
    FAILED = "failed"

