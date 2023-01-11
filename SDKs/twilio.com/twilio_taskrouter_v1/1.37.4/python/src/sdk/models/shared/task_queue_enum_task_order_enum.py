import dataclasses
from enum import Enum

class TaskQueueEnumTaskOrderEnum(str, Enum):
    FIFO = "FIFO"
    LIFO = "LIFO"

