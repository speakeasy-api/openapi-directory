import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestamp as shared_timestamp


@dataclass_json
@dataclasses.dataclass
class DeveloperComment:
    r"""DeveloperComment
    Developer entry from conversation between user and developer.
    """
    
    last_modified: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
