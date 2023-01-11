import dataclasses
from enum import Enum

class EsimProfileEnumStatusEnum(str, Enum):
    NEW = "new"
    RESERVING = "reserving"
    AVAILABLE = "available"
    DOWNLOADED = "downloaded"
    INSTALLED = "installed"
    FAILED = "failed"

