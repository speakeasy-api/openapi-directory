import dataclasses
from enum import Enum

class ShipmentStatusEnum(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    LABEL_PURCHASED = "label_purchased"
    CANCELLED = "cancelled"

