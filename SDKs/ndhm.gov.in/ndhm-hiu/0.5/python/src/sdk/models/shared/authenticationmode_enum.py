import dataclasses
from enum import Enum

class AuthenticationModeEnum(str, Enum):
    MOBILE_OTP = "MOBILE_OTP"
    DIRECT = "DIRECT"
    DEMOGRAPHICS = "DEMOGRAPHICS"
    AADHAAR_OTP = "AADHAAR_OTP"

