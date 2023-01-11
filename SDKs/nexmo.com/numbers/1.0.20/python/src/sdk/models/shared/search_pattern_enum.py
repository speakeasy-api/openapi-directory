import dataclasses
from enum import Enum

class SearchPatternEnum(str, Enum):
    SMS = "SMS"
    VOICE = "VOICE"
    SMS_VOICE = "SMS,VOICE"
    MMS = "MMS"
    SMS_MMS = "SMS,MMS"
    VOICE_MMS = "VOICE,MMS"
    SMS_MMS_VOICE = "SMS,MMS,VOICE"

