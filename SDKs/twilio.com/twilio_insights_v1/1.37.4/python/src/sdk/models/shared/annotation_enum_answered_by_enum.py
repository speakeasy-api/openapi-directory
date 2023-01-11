import dataclasses
from enum import Enum

class AnnotationEnumAnsweredByEnum(str, Enum):
    UNKNOWN_ANSWERED_BY = "unknown_answered_by"
    HUMAN = "human"
    MACHINE = "machine"

