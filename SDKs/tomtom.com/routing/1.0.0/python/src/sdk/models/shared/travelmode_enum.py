import dataclasses
from enum import Enum

class TravelModeEnum(str, Enum):
    CAR = "car"
    TRUCK = "truck"
    TAXI = "taxi"
    BUS = "bus"
    VAN = "van"
    MOTORCYCLE = "motorcycle"
    BICYCLE = "bicycle"
    PEDESTRIAN = "pedestrian"

