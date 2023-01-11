import dataclasses
from enum import Enum

class VerificationAttemptEnumConversionStatusEnum(str, Enum):
    CONVERTED = "converted"
    UNCONVERTED = "unconverted"

