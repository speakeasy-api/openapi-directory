import dataclasses
from enum import Enum

class TechnologyEnum(str, Enum):
    BLUETOOTH = "bluetooth"
    OPTICAL = "optical"
    RFID = "rfid"

