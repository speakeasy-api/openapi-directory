import dataclasses
from enum import Enum

class SecretScanningAlertResolutionEnum(str, Enum):
    NULL = "null"
    FALSE_POSITIVE = "false_positive"
    WONT_FIX = "wont_fix"
    REVOKED = "revoked"
    USED_IN_TESTS = "used_in_tests"

