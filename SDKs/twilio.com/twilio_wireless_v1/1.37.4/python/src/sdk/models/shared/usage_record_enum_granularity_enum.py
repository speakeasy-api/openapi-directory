import dataclasses
from enum import Enum

class UsageRecordEnumGranularityEnum(str, Enum):
    HOURLY = "hourly"
    DAILY = "daily"
    ALL = "all"

