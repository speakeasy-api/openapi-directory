import dataclasses
from enum import Enum

class UsageRecordEnumGroupEnum(str, Enum):
    SIM = "sim"
    FLEET = "fleet"
    NETWORK = "network"
    ISO_COUNTRY = "isoCountry"

