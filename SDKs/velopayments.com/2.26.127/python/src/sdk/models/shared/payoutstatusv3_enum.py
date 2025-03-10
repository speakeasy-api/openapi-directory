import dataclasses
from enum import Enum

class PayoutStatusV3Enum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    SUBMITTED = "SUBMITTED"
    QUOTED = "QUOTED"
    INSTRUCTED = "INSTRUCTED"
    COMPLETED = "COMPLETED"
    INCOMPLETE = "INCOMPLETE"
    CONFIRMED = "CONFIRMED"
    WITHDRAWN = "WITHDRAWN"

