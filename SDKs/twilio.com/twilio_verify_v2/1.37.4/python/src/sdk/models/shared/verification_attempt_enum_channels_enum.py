import dataclasses
from enum import Enum

class VerificationAttemptEnumChannelsEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"

