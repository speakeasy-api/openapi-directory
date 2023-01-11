import dataclasses
from enum import Enum

class CustomerProfileEvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

