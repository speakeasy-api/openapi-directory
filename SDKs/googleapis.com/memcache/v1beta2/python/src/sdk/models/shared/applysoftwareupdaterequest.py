import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ApplySoftwareUpdateRequest:
    r"""ApplySoftwareUpdateRequest
    Request for ApplySoftwareUpdate.
    """
    
    apply_all: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyAll') }})
    node_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIds') }})
    
