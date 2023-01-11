import dataclasses
from enum import Enum

class UserBindingEnumBindingTypeEnum(str, Enum):
    GCM = "gcm"
    APN = "apn"
    FCM = "fcm"

