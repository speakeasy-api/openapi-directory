import dataclasses
from enum import Enum

class PlanChargeModelEnum(str, Enum):
    PER_UNIT = "per_unit"
    FLAT_FEE = "flat_fee"

