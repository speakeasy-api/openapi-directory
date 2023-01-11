import dataclasses
from enum import Enum

class ExecutionRuleEnum(str, Enum):
    FOLLOWING = "following"
    PRECEDING = "preceding"

