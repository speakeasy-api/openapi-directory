import dataclasses
from enum import Enum

class NameTypeEnum(str, Enum):
    FIRSTNAME = "firstname"
    SURNAME = "surname"
    FULLNAME = "fullname"

