import dataclasses
from enum import Enum

class SmsStatusEnum(str, Enum):
    DELIVERED = "delivered"
    EXPIRED = "expired"
    FAILED = "failed"
    REJECTED = "rejected"
    ACCEPTED = "accepted"
    BUFFERED = "buffered"
    UNKNOWN = "unknown"

