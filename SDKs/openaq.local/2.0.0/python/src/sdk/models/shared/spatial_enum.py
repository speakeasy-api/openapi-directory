import dataclasses
from enum import Enum

class SpatialEnum(str, Enum):
    COUNTRY = "country"
    LOCATION = "location"
    PROJECT = "project"
    TOTAL = "total"

