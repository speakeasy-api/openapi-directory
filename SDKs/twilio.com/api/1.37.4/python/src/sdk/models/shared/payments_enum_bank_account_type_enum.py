import dataclasses
from enum import Enum

class PaymentsEnumBankAccountTypeEnum(str, Enum):
    CONSUMER_CHECKING = "consumer-checking"
    CONSUMER_SAVINGS = "consumer-savings"
    COMMERCIAL_CHECKING = "commercial-checking"

