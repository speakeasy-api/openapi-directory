import dataclasses
from enum import Enum

class AcceptTranscriptEnum(str, Enum):
    APPLICATION_VND_REV_TRANSCRIPT_V1_0_PLUS_JSON = "application/vnd.rev.transcript.v1.0+json"
    TEXT_PLAIN = "text/plain"

