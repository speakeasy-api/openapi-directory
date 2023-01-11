import dataclasses
from enum import Enum

class AltEnum(str, Enum):
    CSV = "csv"
    JSON = "json"

