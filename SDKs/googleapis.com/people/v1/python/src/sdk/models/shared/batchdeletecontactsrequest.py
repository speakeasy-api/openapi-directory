import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchDeleteContactsRequest:
    r"""BatchDeleteContactsRequest
    A request to delete a batch of existing contacts.
    """
    
    resource_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNames') }})
    
