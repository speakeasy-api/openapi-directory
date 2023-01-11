import dataclasses
from enum import Enum

class VerificationTypeEnum(str, Enum):
    DNS = "dns"
    FILE = "file"

