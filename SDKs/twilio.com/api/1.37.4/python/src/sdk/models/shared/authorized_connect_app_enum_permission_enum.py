import dataclasses
from enum import Enum

class AuthorizedConnectAppEnumPermissionEnum(str, Enum):
    GET_ALL = "get-all"
    POST_ALL = "post-all"

