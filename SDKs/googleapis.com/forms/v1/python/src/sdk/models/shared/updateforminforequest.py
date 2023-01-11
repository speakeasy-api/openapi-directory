import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import info as shared_info


@dataclass_json
@dataclasses.dataclass
class UpdateFormInfoRequestInput:
    r"""UpdateFormInfoRequestInput
    Update Form's Info.
    """
    
    info: Optional[shared_info.InfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
