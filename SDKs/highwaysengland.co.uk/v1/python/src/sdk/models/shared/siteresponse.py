import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import siteresult as shared_siteresult


@dataclass_json
@dataclasses.dataclass
class SiteResponse:
    row_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_count') }})
    sites: Optional[list[shared_siteresult.SiteResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    
