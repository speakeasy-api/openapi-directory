import dataclasses
from enum import Enum

class AltEnum(str, Enum):
    JSON = "json"
    MEDIA = "media"
    PROTO = "proto"

