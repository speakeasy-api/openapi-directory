import dataclasses
from enum import Enum

class AssetVersionEnumVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    PROTECTED = "protected"

