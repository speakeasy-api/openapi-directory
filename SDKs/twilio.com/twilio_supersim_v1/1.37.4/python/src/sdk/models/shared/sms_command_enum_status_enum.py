import dataclasses
from enum import Enum

class SmsCommandEnumStatusEnum(str, Enum):
    QUEUED = "queued"
    SENT = "sent"
    DELIVERED = "delivered"
    RECEIVED = "received"
    FAILED = "failed"

