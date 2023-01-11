import dataclasses
from enum import Enum

class ContentTypeEnum(str, Enum):
    XML = "xml"
    JSON = "json"
    JSONP = "jsonp"

