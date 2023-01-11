import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api_version as shared_api_version


@dataclass_json
@dataclasses.dataclass
class APIVersions:
    all: Optional[list[shared_api_version.APIVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    latest: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
