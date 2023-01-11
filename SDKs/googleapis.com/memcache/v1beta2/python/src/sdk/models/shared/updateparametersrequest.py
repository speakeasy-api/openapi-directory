import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import memcacheparameters as shared_memcacheparameters


@dataclass_json
@dataclasses.dataclass
class UpdateParametersRequestInput:
    r"""UpdateParametersRequestInput
    Request for UpdateParameters.
    """
    
    parameters: Optional[shared_memcacheparameters.MemcacheParametersInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
