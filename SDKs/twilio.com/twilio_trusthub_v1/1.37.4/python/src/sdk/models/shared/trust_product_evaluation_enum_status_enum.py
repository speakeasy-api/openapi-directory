import dataclasses
from enum import Enum

class TrustProductEvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

