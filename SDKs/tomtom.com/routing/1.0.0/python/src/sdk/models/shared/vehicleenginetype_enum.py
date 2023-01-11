import dataclasses
from enum import Enum

class VehicleEngineTypeEnum(str, Enum):
    COMBUSTION = "combustion"
    ELECTRIC = "electric"

