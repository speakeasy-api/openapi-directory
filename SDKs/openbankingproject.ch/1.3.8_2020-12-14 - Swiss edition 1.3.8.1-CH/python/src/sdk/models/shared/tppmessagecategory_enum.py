import dataclasses
from enum import Enum

class TppMessageCategoryEnum(str, Enum):
    ERROR = "ERROR"
    WARNING = "WARNING"

