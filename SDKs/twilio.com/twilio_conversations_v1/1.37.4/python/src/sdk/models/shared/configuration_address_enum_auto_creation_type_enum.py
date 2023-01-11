import dataclasses
from enum import Enum

class ConfigurationAddressEnumAutoCreationTypeEnum(str, Enum):
    WEBHOOK = "webhook"
    STUDIO = "studio"
    DEFAULT = "default"

