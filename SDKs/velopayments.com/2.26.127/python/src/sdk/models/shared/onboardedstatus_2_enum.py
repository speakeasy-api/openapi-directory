import dataclasses
from enum import Enum

class OnboardedStatus2Enum(str, Enum):
    CREATED = "CREATED"
    INVITED = "INVITED"
    REGISTERED = "REGISTERED"
    ONBOARDED = "ONBOARDED"

