import dataclasses
from enum import Enum

class TextRecognitionModeEnum(str, Enum):
    HANDWRITTEN = "Handwritten"
    PRINTED = "Printed"

