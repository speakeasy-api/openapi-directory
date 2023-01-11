import dataclasses
from enum import Enum

class CallSummariesEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    SIP = "sip"
    TRUNKING = "trunking"
    CLIENT = "client"

