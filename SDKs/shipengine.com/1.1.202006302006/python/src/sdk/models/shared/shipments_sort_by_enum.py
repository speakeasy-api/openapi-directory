import dataclasses
from enum import Enum

class ShipmentsSortByEnum(str, Enum):
    MODIFIED_AT = "modified_at"
    CREATED_AT = "created_at"

