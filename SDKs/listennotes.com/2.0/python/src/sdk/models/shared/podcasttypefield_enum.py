import dataclasses
from enum import Enum

class PodcastTypeFieldEnum(str, Enum):
    EPISODIC = "episodic"
    SERIAL = "serial"

