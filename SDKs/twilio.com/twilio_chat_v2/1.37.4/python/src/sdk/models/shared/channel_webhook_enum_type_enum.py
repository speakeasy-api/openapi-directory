import dataclasses
from enum import Enum

class ChannelWebhookEnumTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    TRIGGER = "trigger"
    STUDIO = "studio"

