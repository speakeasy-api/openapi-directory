import dataclasses
from enum import Enum

class SinkEnumSinkTypeEnum(str, Enum):
    KINESIS = "kinesis"
    WEBHOOK = "webhook"
    SEGMENT = "segment"

