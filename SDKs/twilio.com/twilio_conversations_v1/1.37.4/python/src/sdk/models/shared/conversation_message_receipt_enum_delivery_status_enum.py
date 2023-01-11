import dataclasses
from enum import Enum

class ConversationMessageReceiptEnumDeliveryStatusEnum(str, Enum):
    READ = "read"
    FAILED = "failed"
    DELIVERED = "delivered"
    UNDELIVERED = "undelivered"
    SENT = "sent"

