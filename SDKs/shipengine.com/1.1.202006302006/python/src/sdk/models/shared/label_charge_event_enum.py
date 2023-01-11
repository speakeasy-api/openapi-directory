import dataclasses
from enum import Enum

class LabelChargeEventEnum(str, Enum):
    CARRIER_DEFAULT = "carrier_default"
    ON_CREATION = "on_creation"
    ON_CARRIER_ACCEPTANCE = "on_carrier_acceptance"

