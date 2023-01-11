import dataclasses
from enum import Enum

class PackageStatusEnumEnum(str, Enum):
    STARTED = "started"
    PACKAGING = "packaging"
    COMPLETED = "completed"

