import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ValidateAddressEnum(str, Enum):
    NO_VALIDATION = "no_validation"
    VALIDATE_ONLY = "validate_only"
    VALIDATE_AND_CLEAN = "validate_and_clean"

