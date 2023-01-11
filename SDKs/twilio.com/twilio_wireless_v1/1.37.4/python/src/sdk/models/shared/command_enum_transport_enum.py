import dataclasses
from enum import Enum

class CommandEnumTransportEnum(str, Enum):
    SMS = "sms"
    IP = "ip"

