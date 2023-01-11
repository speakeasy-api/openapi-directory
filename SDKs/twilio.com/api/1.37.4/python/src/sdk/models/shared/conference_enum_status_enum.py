import dataclasses
from enum import Enum

class ConferenceEnumStatusEnum(str, Enum):
    INIT = "init"
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"

