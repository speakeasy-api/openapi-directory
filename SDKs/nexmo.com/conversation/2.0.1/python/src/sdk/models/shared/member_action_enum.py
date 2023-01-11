import dataclasses
from enum import Enum

class MemberActionEnum(str, Enum):
    INVITE = "invite"
    JOIN = "join"

