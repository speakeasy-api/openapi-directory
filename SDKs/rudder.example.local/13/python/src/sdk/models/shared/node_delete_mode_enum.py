import dataclasses
from enum import Enum

class NodeDeleteModeEnum(str, Enum):
    MOVE = "move"
    ERASE = "erase"

