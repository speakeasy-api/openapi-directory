import dataclasses
from enum import Enum

class CaseTypeEnum(str, Enum):
    LOWER_CASE = "LowerCase"
    UPPER_CASE = "UpperCase"
    SENTENCE_CASE = "SentenceCase"
    TITLE_CASE = "TitleCase"

