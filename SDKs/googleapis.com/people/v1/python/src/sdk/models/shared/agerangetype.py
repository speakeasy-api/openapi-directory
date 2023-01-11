import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fieldmetadata as shared_fieldmetadata

class AgeRangeTypeAgeRangeEnum(str, Enum):
    AGE_RANGE_UNSPECIFIED = "AGE_RANGE_UNSPECIFIED"
    LESS_THAN_EIGHTEEN = "LESS_THAN_EIGHTEEN"
    EIGHTEEN_TO_TWENTY = "EIGHTEEN_TO_TWENTY"
    TWENTY_ONE_OR_OLDER = "TWENTY_ONE_OR_OLDER"


@dataclass_json
@dataclasses.dataclass
class AgeRangeType:
    r"""AgeRangeType
    A person's age range.
    """
    
    age_range: Optional[AgeRangeTypeAgeRangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRange') }})
    metadata: Optional[shared_fieldmetadata.FieldMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
