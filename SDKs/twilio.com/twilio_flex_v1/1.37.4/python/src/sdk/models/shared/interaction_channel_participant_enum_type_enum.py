import dataclasses
from enum import Enum

class InteractionChannelParticipantEnumTypeEnum(str, Enum):
    SUPERVISOR = "supervisor"
    CUSTOMER = "customer"
    EXTERNAL = "external"
    AGENT = "agent"
    UNKNOWN = "unknown"

