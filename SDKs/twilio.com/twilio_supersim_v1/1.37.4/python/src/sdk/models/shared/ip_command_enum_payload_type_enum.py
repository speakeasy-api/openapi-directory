import dataclasses
from enum import Enum

class IPCommandEnumPayloadTypeEnum(str, Enum):
    TEXT = "text"
    BINARY = "binary"

