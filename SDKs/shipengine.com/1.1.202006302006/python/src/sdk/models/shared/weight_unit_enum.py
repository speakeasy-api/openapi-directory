import dataclasses
from enum import Enum

class WeightUnitEnum(str, Enum):
    POUND = "pound"
    OUNCE = "ounce"
    GRAM = "gram"
    KILOGRAM = "kilogram"

