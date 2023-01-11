import dataclasses
from enum import Enum

class FedexPickupTypeEnum(str, Enum):
    NONE = "none"
    REGULAR_PICKUP = "regular_pickup"
    REQUEST_COURIER = "request_courier"
    DROP_BOX = "drop_box"
    BUSINESS_SERVICE_CENTER = "business_service_center"
    STATION = "station"

