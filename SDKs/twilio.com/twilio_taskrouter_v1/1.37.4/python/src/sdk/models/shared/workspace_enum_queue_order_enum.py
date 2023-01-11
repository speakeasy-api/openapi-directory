import dataclasses
from enum import Enum

class WorkspaceEnumQueueOrderEnum(str, Enum):
    FIFO = "FIFO"
    LIFO = "LIFO"

