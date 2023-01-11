import dataclasses
from enum import Enum

class ConferenceParticipantEnumCallTypeEnum(str, Enum):
    CARRIER = "carrier"
    CLIENT = "client"
    SIP = "sip"

