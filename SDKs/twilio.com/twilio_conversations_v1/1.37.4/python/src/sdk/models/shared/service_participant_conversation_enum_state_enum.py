import dataclasses
from enum import Enum

class ServiceParticipantConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

