import dataclasses
from enum import Enum

class TrunkEnumTransferCallerIDEnum(str, Enum):
    FROM_TRANSFEREE = "from-transferee"
    FROM_TRANSFEROR = "from-transferor"

