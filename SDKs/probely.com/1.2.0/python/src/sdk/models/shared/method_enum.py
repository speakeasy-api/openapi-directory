import dataclasses
from enum import Enum

class MethodEnum(str, Enum):
    GET = "GET"
    OPTIONS = "OPTIONS"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"
    HEAD = "HEAD"

