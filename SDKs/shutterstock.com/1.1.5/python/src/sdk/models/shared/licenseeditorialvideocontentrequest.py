import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseeditorialvideocontent as shared_licenseeditorialvideocontent


@dataclass_json
@dataclasses.dataclass
class LicenseEditorialVideoContentRequest:
    r"""LicenseEditorialVideoContentRequest
    License editorial video content request
    """
    
    country: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    editorial: list[shared_licenseeditorialvideocontent.LicenseEditorialVideoContent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial') }})
    
