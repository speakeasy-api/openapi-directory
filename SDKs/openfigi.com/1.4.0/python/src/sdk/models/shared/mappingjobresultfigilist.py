import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import figiresult as shared_figiresult


@dataclass_json
@dataclasses.dataclass
class MappingJobResultFigiList:
    data: Optional[list[shared_figiresult.FigiResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
