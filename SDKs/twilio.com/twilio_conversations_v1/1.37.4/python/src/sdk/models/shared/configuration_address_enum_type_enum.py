import dataclasses
from enum import Enum

class ConfigurationAddressEnumTypeEnum(str, Enum):
    SMS = "sms"
    WHATSAPP = "whatsapp"
    MESSENGER = "messenger"
    GBM = "gbm"

