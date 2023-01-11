import dataclasses
from enum import Enum

class IncomingPhoneNumberMobileEnumAddressRequirementEnum(str, Enum):
    NONE = "none"
    ANY = "any"
    LOCAL = "local"
    FOREIGN = "foreign"

