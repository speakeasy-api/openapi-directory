import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UndeleteAlertRequest:
    r"""UndeleteAlertRequest
    A request to undelete a specific alert that was marked for deletion.
    """
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    
