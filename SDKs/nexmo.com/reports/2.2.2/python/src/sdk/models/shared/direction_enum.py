import dataclasses
from enum import Enum

class DirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

