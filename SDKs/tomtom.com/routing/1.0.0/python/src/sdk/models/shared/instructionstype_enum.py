import dataclasses
from enum import Enum

class InstructionsTypeEnum(str, Enum):
    CODED = "coded"
    TEXT = "text"
    TAGGED = "tagged"

