import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import request as shared_request
from ..shared import writecontrol as shared_writecontrol


@dataclass_json
@dataclasses.dataclass
class BatchUpdateFormRequestInput:
    r"""BatchUpdateFormRequestInput
    A batch of updates to perform on a form. All the specified updates are made or none of them are.
    """
    
    include_form_in_response: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeFormInResponse') }})
    requests: Optional[list[shared_request.RequestInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    write_control: Optional[shared_writecontrol.WriteControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
