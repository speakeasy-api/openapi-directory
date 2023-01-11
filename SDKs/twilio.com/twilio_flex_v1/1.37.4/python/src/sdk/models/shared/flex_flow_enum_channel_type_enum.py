import dataclasses
from enum import Enum

class FlexFlowEnumChannelTypeEnum(str, Enum):
    WEB = "web"
    SMS = "sms"
    FACEBOOK = "facebook"
    WHATSAPP = "whatsapp"
    LINE = "line"
    CUSTOM = "custom"

