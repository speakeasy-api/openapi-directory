import dataclasses
from enum import Enum

class AccessEnum(str, Enum):
    PLAYABLE = "playable"
    PREVIEW = "preview"
    BLOCKED = "blocked"

