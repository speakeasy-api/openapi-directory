import dataclasses
from enum import Enum

class DestinationTypeEnum(str, Enum):
    CITY = "CITY"
    COUNTRY = "COUNTRY"
    REGION = "REGION"

