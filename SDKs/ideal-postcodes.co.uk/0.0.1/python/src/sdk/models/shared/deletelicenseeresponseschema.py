import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import deletelicenseeresult as shared_deletelicenseeresult


@dataclass_json
@dataclasses.dataclass
class DeleteLicenseeResponseSchema:
    result: Optional[shared_deletelicenseeresult.DeleteLicenseeResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
