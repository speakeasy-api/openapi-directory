import dataclasses
from enum import Enum

class AsrStatusEnum(str, Enum):
    OK = "ok"
    ERROR = "error"

