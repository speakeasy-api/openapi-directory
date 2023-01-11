import dataclasses
from enum import Enum

class PaymentsEnumTokenTypeEnum(str, Enum):
    ONE_TIME = "one-time"
    REUSABLE = "reusable"

