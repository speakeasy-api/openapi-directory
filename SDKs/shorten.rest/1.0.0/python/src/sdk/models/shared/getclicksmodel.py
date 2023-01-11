import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clickmodel as shared_clickmodel


@dataclass_json
@dataclasses.dataclass
class GetClicksModel:
    clicks: Optional[list[shared_clickmodel.ClickModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    last_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastId') }})
    
