import dataclasses
from enum import Enum

class RoomRecordingEnumCodecEnum(str, Enum):
    VP8 = "VP8"
    H264 = "H264"
    OPUS = "OPUS"
    PCMU = "PCMU"

