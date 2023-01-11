import dataclasses
from enum import Enum

class UpsPickupTypeEnum(str, Enum):
    DAILY_PICKUP = "daily_pickup"
    OCCASIONAL_PICKUP = "occasional_pickup"
    CUSTOMER_COUNTER = "customer_counter"

