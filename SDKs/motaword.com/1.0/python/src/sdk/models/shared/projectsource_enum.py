import dataclasses
from enum import Enum

class ProjectSourceEnum(str, Enum):
    API = "api"
    WEB = "web"

