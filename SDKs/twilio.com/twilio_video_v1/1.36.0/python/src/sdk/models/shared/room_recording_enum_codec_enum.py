from dataclasses import dataclass, field
from typing import Enum

class RoomRecordingEnumCodecEnum(str, Enum):
    VP8 = "VP8"
    H264 = "H264"
    OPUS = "OPUS"
    PCMU = "PCMU"

