import dataclasses
from enum import Enum

class IDTypeEnum(str, Enum):
    VAT = "VAT"
    SSN = "SSN"

