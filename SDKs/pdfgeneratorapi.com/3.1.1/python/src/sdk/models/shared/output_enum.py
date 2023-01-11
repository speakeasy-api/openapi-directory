import dataclasses
from enum import Enum

class OutputEnum(str, Enum):
    BASE64 = "base64"
    URL = "url"
    I = "I"

