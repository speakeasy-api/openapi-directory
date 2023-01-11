import dataclasses
from enum import Enum

class PaymentAuditCurrencyV3Enum(str, Enum):
    USD = "USD"
    GBP = "GBP"
    EUR = "EUR"

