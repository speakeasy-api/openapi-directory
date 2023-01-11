import dataclasses
from enum import Enum

class BankTransferTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"

