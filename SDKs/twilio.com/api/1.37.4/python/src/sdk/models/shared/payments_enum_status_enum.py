import dataclasses
from enum import Enum

class PaymentsEnumStatusEnum(str, Enum):
    COMPLETE = "complete"
    CANCEL = "cancel"

