import dataclasses
from enum import Enum

class CollectOnDeliveryPaymentTypeEnum(str, Enum):
    ANY = "any"
    CASH = "cash"
    CASH_EQUIVALENT = "cash_equivalent"
    NONE = "none"

