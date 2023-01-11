import dataclasses
from enum import Enum

class AuditLogIncludeEnum(str, Enum):
    WEB = "web"
    GIT = "git"
    ALL = "all"

