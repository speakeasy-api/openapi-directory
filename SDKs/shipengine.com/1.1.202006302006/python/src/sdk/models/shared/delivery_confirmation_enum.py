import dataclasses
from enum import Enum

class DeliveryConfirmationEnum(str, Enum):
    NONE = "none"
    DELIVERY = "delivery"
    SIGNATURE = "signature"
    ADULT_SIGNATURE = "adult_signature"
    DIRECT_SIGNATURE = "direct_signature"
    DELIVERY_MAILED = "delivery_mailed"

