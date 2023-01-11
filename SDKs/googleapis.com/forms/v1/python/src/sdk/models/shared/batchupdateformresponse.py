import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import form as shared_form
from ..shared import response as shared_response
from ..shared import writecontrol as shared_writecontrol


@dataclass_json
@dataclasses.dataclass
class BatchUpdateFormResponse:
    r"""BatchUpdateFormResponse
    Response to a BatchUpdateFormRequest.
    """
    
    form: Optional[shared_form.Form] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    replies: Optional[list[shared_response.Response]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    write_control: Optional[shared_writecontrol.WriteControl] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
