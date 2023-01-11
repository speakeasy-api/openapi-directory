import dataclasses
from enum import Enum

class ErrorTypeEnum(str, Enum):
    ACCOUNT_STATUS = "account_status"
    BUSINESS_RULES = "business_rules"
    VALIDATION = "validation"
    SECURITY = "security"
    SYSTEM = "system"
    INTEGRATIONS = "integrations"

