import dataclasses
from enum import Enum

class ChallengeEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

