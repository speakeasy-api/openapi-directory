import dataclasses
from enum import Enum

class ViewEnum(str, Enum):
    UNIFIED = "Unified"
    IN = "IN"
    PK = "PK"
    IL = "IL"
    MA = "MA"

