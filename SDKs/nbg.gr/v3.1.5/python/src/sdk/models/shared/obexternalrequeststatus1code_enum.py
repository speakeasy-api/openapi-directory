import dataclasses
from enum import Enum

class ObExternalRequestStatus1CodeEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    REJECTED = "Rejected"
    REVOKED = "Revoked"

