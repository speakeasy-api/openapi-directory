import dataclasses
from enum import Enum

class UserTitleEnum(str, Enum):
    CEO = "ceo"
    CTO = "cto"
    CSO = "cso"
    SECENG = "seceng"
    DEV = "dev"
    DEVOP = "devop"
    MANAGER = "manager"
    OTHER = "other"

