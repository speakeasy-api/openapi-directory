import dataclasses
from enum import Enum

class EnvironmentEnum(str, Enum):
    TESTING = "testing"
    PRODUCTION = "production"

