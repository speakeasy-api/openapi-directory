import dataclasses
from enum import Enum

class AddressValidationStatusEnum(str, Enum):
    UNVERIFIED = "unverified"
    VERIFIED = "verified"
    WARNING = "warning"
    ERROR = "error"

