import dataclasses
from enum import Enum

class CommitteeClassificationEnum(str, Enum):
    COMMITTEE = "committee"
    SUBCOMMITTEE = "subcommittee"

