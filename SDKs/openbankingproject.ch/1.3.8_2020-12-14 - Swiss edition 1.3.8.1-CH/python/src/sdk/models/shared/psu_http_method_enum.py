import dataclasses
from enum import Enum

class PsuHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    PATCH = "PATCH"
    DELETE = "DELETE"

