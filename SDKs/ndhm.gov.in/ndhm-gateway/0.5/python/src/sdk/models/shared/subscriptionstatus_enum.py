import dataclasses
from enum import Enum

class SubscriptionStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    DENIED = "DENIED"

