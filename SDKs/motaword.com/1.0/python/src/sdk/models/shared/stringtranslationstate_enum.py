import dataclasses
from enum import Enum

class StringTranslationStateEnum(str, Enum):
    APPROVED = "Approved"
    TRANSLATED = "Translated"

