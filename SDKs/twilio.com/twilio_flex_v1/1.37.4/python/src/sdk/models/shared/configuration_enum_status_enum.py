import dataclasses
from enum import Enum

class ConfigurationEnumStatusEnum(str, Enum):
    OK = "ok"
    INPROGRESS = "inprogress"
    NOTSTARTED = "notstarted"

