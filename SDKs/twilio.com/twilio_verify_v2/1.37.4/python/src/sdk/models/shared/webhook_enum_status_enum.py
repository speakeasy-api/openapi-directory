import dataclasses
from enum import Enum

class WebhookEnumStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"

