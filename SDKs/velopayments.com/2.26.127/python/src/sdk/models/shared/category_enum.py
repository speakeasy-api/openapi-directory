import dataclasses
from enum import Enum

class CategoryEnum(str, Enum):
    PAYMENT = "payment"
    PAYEE = "payee"
    DEBIT = "debit"

