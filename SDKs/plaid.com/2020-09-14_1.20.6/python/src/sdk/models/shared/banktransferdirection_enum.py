import dataclasses
from enum import Enum

class BankTransferDirectionEnum(str, Enum):
    OUTBOUND = "outbound"
    INBOUND = "inbound"
    NULL = "null"

