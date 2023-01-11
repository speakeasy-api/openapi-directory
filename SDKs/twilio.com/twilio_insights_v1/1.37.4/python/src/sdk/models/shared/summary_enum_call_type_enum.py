import dataclasses
from enum import Enum

class SummaryEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    SIP = "sip"
    TRUNKING = "trunking"
    CLIENT = "client"

