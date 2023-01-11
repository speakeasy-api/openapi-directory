import dataclasses
from enum import Enum

class FormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"

