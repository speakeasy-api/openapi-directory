import dataclasses
from enum import Enum

class ErrorSourceEnum(str, Enum):
    CARRIER = "carrier"
    ORDER_SOURCE = "order_source"
    SHIPENGINE = "shipengine"

