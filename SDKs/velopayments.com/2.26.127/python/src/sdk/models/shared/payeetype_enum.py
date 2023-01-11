import dataclasses
from enum import Enum

class PayeeTypeEnum(str, Enum):
    INDIVIDUAL = "Individual"
    COMPANY = "Company"

