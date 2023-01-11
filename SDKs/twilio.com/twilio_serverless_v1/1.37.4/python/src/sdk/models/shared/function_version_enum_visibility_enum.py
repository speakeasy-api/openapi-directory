import dataclasses
from enum import Enum

class FunctionVersionEnumVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    PROTECTED = "protected"

