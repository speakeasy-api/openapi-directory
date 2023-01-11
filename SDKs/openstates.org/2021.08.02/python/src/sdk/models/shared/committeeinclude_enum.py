import dataclasses
from enum import Enum

class CommitteeIncludeEnum(str, Enum):
    MEMBERSHIPS = "memberships"
    LINKS = "links"
    SOURCES = "sources"

