import dataclasses
from enum import Enum

class InvitationStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    PENDING = "PENDING"
    DECLINED = "DECLINED"

