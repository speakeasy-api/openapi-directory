import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createitemresponse as shared_createitemresponse


@dataclass_json
@dataclasses.dataclass
class Response:
    r"""Response
    A single response from an update.
    """
    
    create_item: Optional[shared_createitemresponse.CreateItemResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createItem') }})
    
