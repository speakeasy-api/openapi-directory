import dataclasses
from enum import Enum

class BookingStatusEnum(str, Enum):
    INFORMATION = "information"
    BOOKED = "booked"
    PENDING = "pending"
    BOTH = "both"

