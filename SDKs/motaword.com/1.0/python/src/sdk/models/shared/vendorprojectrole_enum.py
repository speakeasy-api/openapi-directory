import dataclasses
from enum import Enum

class VendorProjectRoleEnum(str, Enum):
    TRANSLATOR = "translator"
    PROOFREADER = "proofreader"

