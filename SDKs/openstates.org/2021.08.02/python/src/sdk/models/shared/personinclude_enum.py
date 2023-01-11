import dataclasses
from enum import Enum

class PersonIncludeEnum(str, Enum):
    OTHER_NAMES = "other_names"
    OTHER_IDENTIFIERS = "other_identifiers"
    LINKS = "links"
    SOURCES = "sources"
    OFFICES = "offices"

