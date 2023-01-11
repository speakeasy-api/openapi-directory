import dataclasses
from enum import Enum

class ResponseTypeEnum(str, Enum):
    CODE = "code"
    TOKEN = "token"
    CODE_AND_TOKEN = "code_and_token"

