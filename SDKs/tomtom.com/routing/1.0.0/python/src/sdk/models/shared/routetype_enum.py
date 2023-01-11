import dataclasses
from enum import Enum

class RouteTypeEnum(str, Enum):
    FASTEST = "fastest"
    SHORTEST = "shortest"
    ECO = "eco"
    THRILLING = "thrilling"

