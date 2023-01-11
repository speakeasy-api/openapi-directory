import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import licenseeditorialcontent as shared_licenseeditorialcontent


@dataclass_json
@dataclasses.dataclass
class LicenseEditorialContentRequest:
    r"""LicenseEditorialContentRequest
    License editorial content request
    """
    
    country: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    editorial: list[shared_licenseeditorialcontent.LicenseEditorialContent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial') }})
    
