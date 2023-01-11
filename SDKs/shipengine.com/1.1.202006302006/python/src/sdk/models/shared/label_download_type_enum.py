import dataclasses
from enum import Enum

class LabelDownloadTypeEnum(str, Enum):
    URL = "url"
    INLINE = "inline"

