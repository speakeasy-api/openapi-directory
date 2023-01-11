import dataclasses
from enum import Enum

class InteractionChannelEnumStatusEnum(str, Enum):
    CLOSED = "closed"
    WRAPUP = "wrapup"

