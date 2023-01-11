import dataclasses
from enum import Enum

class TransactionStatusSbsEnum(str, Enum):
    ACSC = "ACSC"
    ACTC = "ACTC"
    PATC = "PATC"
    RCVD = "RCVD"
    RJCT = "RJCT"
    CANC = "CANC"

