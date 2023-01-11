import dataclasses
from enum import Enum

class SourceAccountTypeEnum(str, Enum):
    FBO = "FBO"
    WUBS_DECOUPLED = "WUBS_DECOUPLED"

