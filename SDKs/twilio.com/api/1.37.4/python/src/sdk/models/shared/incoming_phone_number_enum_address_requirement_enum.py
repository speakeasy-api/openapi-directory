import dataclasses
from enum import Enum

class IncomingPhoneNumberEnumAddressRequirementEnum(str, Enum):
    NONE = "none"
    ANY = "any"
    LOCAL = "local"
    FOREIGN = "foreign"

