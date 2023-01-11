import dataclasses
from enum import Enum

class ColumnIDEnum(str, Enum):
    ALL = "all"
    ARCHIVED = "archived"
    NOT_ARCHIVED = "not_archived"

