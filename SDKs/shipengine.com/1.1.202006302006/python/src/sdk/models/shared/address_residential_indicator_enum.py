import dataclasses
from enum import Enum

class AddressResidentialIndicatorEnum(str, Enum):
    UNKNOWN = "unknown"
    YES = "yes"
    NO = "no"

