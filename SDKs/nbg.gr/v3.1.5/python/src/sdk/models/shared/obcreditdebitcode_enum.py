import dataclasses
from enum import Enum

class ObCreditDebitCodeEnum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"

