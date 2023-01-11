import dataclasses
from enum import Enum

class PaymentServiceEnum(str, Enum):
    PAYMENTS = "payments"
    BULK_PAYMENTS = "bulk-payments"
    PERIODIC_PAYMENTS = "periodic-payments"

