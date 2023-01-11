import dataclasses
from enum import Enum

class SalesActivityTypeEnum(str, Enum):
    EMAIL = "EMAIL"
    NOTE = "NOTE"
    INCOMING_EMAIL = "INCOMING_EMAIL"
    TASK = "TASK"

