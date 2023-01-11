import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ecocertification as shared_ecocertification

class SustainabilityCertificationsBreeamCertificationEnum(str, Enum):
    BREEAM_CERTIFICATION_UNSPECIFIED = "BREEAM_CERTIFICATION_UNSPECIFIED"
    NO_BREEAM_CERTIFICATION = "NO_BREEAM_CERTIFICATION"
    BREEAM_PASS = "BREEAM_PASS"
    BREEAM_GOOD = "BREEAM_GOOD"
    BREEAM_VERY_GOOD = "BREEAM_VERY_GOOD"
    BREEAM_EXCELLENT = "BREEAM_EXCELLENT"
    BREEAM_OUTSTANDING = "BREEAM_OUTSTANDING"

class SustainabilityCertificationsBreeamCertificationExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class SustainabilityCertificationsLeedCertificationEnum(str, Enum):
    LEED_CERTIFICATION_UNSPECIFIED = "LEED_CERTIFICATION_UNSPECIFIED"
    NO_LEED_CERTIFICATION = "NO_LEED_CERTIFICATION"
    LEED_CERTIFIED = "LEED_CERTIFIED"
    LEED_SILVER = "LEED_SILVER"
    LEED_GOLD = "LEED_GOLD"
    LEED_PLATINUM = "LEED_PLATINUM"

class SustainabilityCertificationsLeedCertificationExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclasses.dataclass
class SustainabilityCertifications:
    r"""SustainabilityCertifications
    Sustainability certifications the hotel has been awarded.
    """
    
    breeam_certification: Optional[SustainabilityCertificationsBreeamCertificationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breeamCertification') }})
    breeam_certification_exception: Optional[SustainabilityCertificationsBreeamCertificationExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('breeamCertificationException') }})
    eco_certifications: Optional[list[shared_ecocertification.EcoCertification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecoCertifications') }})
    leed_certification: Optional[SustainabilityCertificationsLeedCertificationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leedCertification') }})
    leed_certification_exception: Optional[SustainabilityCertificationsLeedCertificationExceptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leedCertificationException') }})
    
