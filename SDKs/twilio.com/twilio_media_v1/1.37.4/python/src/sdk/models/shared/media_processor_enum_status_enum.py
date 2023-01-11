import dataclasses
from enum import Enum

class MediaProcessorEnumStatusEnum(str, Enum):
    FAILED = "failed"
    STARTED = "started"
    ENDED = "ended"

