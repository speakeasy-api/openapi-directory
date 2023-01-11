import dataclasses
from enum import Enum

class DownhillEfficiencyEnum(str, Enum):
    COMBUSTION = "combustion"
    ELECTRIC = "electric"

