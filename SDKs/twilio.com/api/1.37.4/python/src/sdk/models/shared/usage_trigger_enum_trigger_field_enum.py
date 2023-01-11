import dataclasses
from enum import Enum

class UsageTriggerEnumTriggerFieldEnum(str, Enum):
    COUNT = "count"
    USAGE = "usage"
    PRICE = "price"

