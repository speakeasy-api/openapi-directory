import dataclasses
from enum import Enum

class AccountStatusEnum(str, Enum):
    ACTIVE = "active"
    TRIAL_ENDED = "trial_ended"
    CANCELED = "canceled"

