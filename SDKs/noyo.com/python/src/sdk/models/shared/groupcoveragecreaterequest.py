import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupCoverageCreateRequestLineOfCoverageEnum(str, Enum):
    ACCIDENT = "accident"
    ADD = "add"
    CANCER = "cancer"
    CRITICAL_ILLNESS = "critical_illness"
    DENTAL = "dental"
    HOSPITAL_INDEMNITY = "hospital_indemnity"
    LIFE = "life"
    LTD = "ltd"
    MEDICAL = "medical"
    STD = "std"
    VISION = "vision"


@dataclass_json
@dataclasses.dataclass
class GroupCoverageCreateRequest:
    line_of_coverage: GroupCoverageCreateRequestLineOfCoverageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_of_coverage') }})
    requested_effective_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_effective_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    existing_coverage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existing_coverage') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    
