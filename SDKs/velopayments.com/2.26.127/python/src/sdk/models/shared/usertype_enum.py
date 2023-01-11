import dataclasses
from enum import Enum

class UserTypeEnum(str, Enum):
    BACKOFFICE = "BACKOFFICE"
    PAYOR = "PAYOR"
    PAYEE = "PAYEE"

