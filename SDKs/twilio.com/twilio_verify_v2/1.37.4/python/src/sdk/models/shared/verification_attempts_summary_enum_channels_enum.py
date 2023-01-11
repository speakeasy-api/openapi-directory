import dataclasses
from enum import Enum

class VerificationAttemptsSummaryEnumChannelsEnum(str, Enum):
    SMS = "sms"
    CALL = "call"
    EMAIL = "email"
    WHATSAPP = "whatsapp"

