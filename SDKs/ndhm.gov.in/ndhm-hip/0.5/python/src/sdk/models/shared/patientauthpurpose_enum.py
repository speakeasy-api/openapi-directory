import dataclasses
from enum import Enum

class PatientAuthPurposeEnum(str, Enum):
    LINK = "LINK"
    KYC = "KYC"
    KYC_AND_LINK = "KYC_AND_LINK"

