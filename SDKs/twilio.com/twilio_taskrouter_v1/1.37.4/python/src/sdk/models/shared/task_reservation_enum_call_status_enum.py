import dataclasses
from enum import Enum

class TaskReservationEnumCallStatusEnum(str, Enum):
    INITIATED = "initiated"
    RINGING = "ringing"
    ANSWERED = "answered"
    COMPLETED = "completed"

