import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlerpcstatus as shared_googlerpcstatus


@dataclass_json
@dataclasses.dataclass
class ValidateExclusivityResponse:
    r"""ValidateExclusivityResponse
    The response of exclusivity artifacts validation result status.
    """
    
    status: Optional[shared_googlerpcstatus.GoogleRPCStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
