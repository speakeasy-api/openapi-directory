import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GroupCoverageResultLineOfCoverageEnum(str, Enum):
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
class GroupCoverageResult:
    application_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    created: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_of_coverage: GroupCoverageResultLineOfCoverageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_of_coverage') }})
    modified: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    requested_effective_date: date = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_effective_date'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    existing_coverage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existing_coverage') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    
