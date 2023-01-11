import dataclasses
from enum import Enum

class VerificationEnumChannelEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"
    SNA = "sna"

