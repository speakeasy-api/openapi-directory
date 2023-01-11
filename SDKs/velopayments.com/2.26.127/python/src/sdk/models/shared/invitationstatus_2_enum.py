import dataclasses
from enum import Enum

class InvitationStatus2Enum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"

