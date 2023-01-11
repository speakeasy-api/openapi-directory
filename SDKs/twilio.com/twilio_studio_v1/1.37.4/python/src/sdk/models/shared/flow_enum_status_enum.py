import dataclasses
from enum import Enum

class FlowEnumStatusEnum(str, Enum):
    DRAFT = "draft"
    PUBLISHED = "published"

