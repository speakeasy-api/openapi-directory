import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sites as shared_sites


@dataclass_json
@dataclasses.dataclass
class SiteTypeLayer:
    sites: Optional[list[shared_sites.Sites]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sites') }})
    
