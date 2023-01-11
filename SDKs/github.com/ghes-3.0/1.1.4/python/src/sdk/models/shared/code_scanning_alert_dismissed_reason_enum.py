import dataclasses
from enum import Enum

class CodeScanningAlertDismissedReasonEnum(str, Enum):
    NULL = "null"
    FALSE_POSITIVE = "false positive"
    WON_T_FIX = "won't fix"
    USED_IN_TESTS = "used in tests"

