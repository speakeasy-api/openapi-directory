import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LicenseEditorialContentSizeEnum(str, Enum):
    SMALL = "small"
    MEDIUM = "medium"
    ORIGINAL = "original"


@dataclass_json
@dataclasses.dataclass
class LicenseEditorialContent:
    r"""LicenseEditorialContent
    Individual editorial content to license
    """
    
    editorial_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial_id') }})
    license: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    size: Optional[LicenseEditorialContentSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
