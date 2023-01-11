import dataclasses
from enum import Enum

class TextActionTypeEnum(str, Enum):
    TRANSFORM = "Transform"
    REPLACE = "Replace"

