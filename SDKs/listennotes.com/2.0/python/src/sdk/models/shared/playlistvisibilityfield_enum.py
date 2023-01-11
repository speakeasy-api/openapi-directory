import dataclasses
from enum import Enum

class PlaylistVisibilityFieldEnum(str, Enum):
    PUBLIC = "public"
    UNLISTED = "unlisted"
    PRIVATE = "private"

