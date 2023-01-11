import dataclasses
from enum import Enum

class JurisdictionClassificationEnum(str, Enum):
    STATE = "state"
    MUNICIPALITY = "municipality"
    COUNTRY = "country"

