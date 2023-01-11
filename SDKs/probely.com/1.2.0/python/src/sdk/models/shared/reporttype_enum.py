import dataclasses
from enum import Enum

class ReportTypeEnum(str, Enum):
    DEFAULT = "default"
    OWASP = "owasp"
    PCI = "pci"

