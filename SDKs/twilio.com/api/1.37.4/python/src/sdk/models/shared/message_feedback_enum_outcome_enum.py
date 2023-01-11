import dataclasses
from enum import Enum

class MessageFeedbackEnumOutcomeEnum(str, Enum):
    CONFIRMED = "confirmed"
    UNCONFIRMED = "unconfirmed"

