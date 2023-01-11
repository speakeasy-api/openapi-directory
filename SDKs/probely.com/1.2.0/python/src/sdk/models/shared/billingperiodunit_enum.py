import dataclasses
from enum import Enum

class BillingPeriodUnitEnum(str, Enum):
    MONTH = "month"
    YEAR = "year"

