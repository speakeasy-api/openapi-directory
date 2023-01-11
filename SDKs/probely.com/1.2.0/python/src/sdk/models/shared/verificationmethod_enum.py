import dataclasses
from enum import Enum

class VerificationMethodEnum(str, Enum):
    DNS = "dns"
    FILE = "file"

