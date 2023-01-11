import dataclasses
from enum import Enum

class ExternalServiceLevel1CodeEnum(str, Enum):
    SEPA = "SEPA"
    PRPT = "PRPT"
    SDVA = "SDVA"
    URGP = "URGP"

