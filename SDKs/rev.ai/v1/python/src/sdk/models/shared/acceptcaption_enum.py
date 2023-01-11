import dataclasses
from enum import Enum

class AcceptCaptionEnum(str, Enum):
    APPLICATION_X_SUBRIP = "application/x-subrip"
    TEXT_VTT = "text/vtt"

