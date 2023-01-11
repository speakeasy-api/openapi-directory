import dataclasses
from enum import Enum

class IPCommandEnumDirectionEnum(str, Enum):
    TO_SIM = "to_sim"
    FROM_SIM = "from_sim"

