import dataclasses
from enum import Enum

class ServiceBindingEnumBindingTypeEnum(str, Enum):
    APN = "apn"
    GCM = "gcm"
    FCM = "fcm"

