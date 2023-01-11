import dataclasses
from enum import Enum

class OfferingIDEnum(str, Enum):
    SUBMIT_TEXT = "submit_text"
    MCQ = "MCQ"
    SPATIAL_TRIANGULAR = "spatial_triangular"
    SPATIAL_PLANAR = "spatial_planar"
    SPATIAL_LINEAR = "spatial_linear"

