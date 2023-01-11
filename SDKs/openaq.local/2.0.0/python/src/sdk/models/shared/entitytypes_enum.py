import dataclasses
from enum import Enum

class EntityTypesEnum(str, Enum):
    GOVERNMENT = "government"
    COMMUNITY = "community"
    RESEARCH = "research"

