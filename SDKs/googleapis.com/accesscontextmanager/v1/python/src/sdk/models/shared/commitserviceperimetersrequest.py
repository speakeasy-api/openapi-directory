import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CommitServicePerimetersRequest:
    r"""CommitServicePerimetersRequest
    A request to commit dry-run specs in all Service Perimeters belonging to an Access Policy.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
