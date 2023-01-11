import dataclasses
from enum import Enum

class MetricEnumStreamDirectionEnum(str, Enum):
    UNKNOWN = "unknown"
    INBOUND = "inbound"
    OUTBOUND = "outbound"
    BOTH = "both"

