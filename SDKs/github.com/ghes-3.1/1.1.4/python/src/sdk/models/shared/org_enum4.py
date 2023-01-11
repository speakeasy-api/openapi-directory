import dataclasses
from enum import Enum

class OrgEnum4(str, Enum):
    ALL = "all"
    PUBLIC = "public"
    PRIVATE = "private"
    FORKS = "forks"
    SOURCES = "sources"
    MEMBER = "member"
    INTERNAL = "internal"

