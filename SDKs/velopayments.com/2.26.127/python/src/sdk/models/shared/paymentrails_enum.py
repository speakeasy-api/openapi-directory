import dataclasses
from enum import Enum

class PaymentRailsEnum(str, Enum):
    WU = "WU"
    BOFA = "BOFA"

