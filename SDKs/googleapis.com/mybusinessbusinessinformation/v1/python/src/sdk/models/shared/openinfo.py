import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_

class OpenInfoStatusEnum(str, Enum):
    OPEN_FOR_BUSINESS_UNSPECIFIED = "OPEN_FOR_BUSINESS_UNSPECIFIED"
    OPEN = "OPEN"
    CLOSED_PERMANENTLY = "CLOSED_PERMANENTLY"
    CLOSED_TEMPORARILY = "CLOSED_TEMPORARILY"


@dataclass_json
@dataclasses.dataclass
class OpenInfoInput:
    r"""OpenInfoInput
    Information related to the opening state of the business.
    """
    
    opening_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openingDate') }})
    status: Optional[OpenInfoStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class OpenInfo:
    r"""OpenInfo
    Information related to the opening state of the business.
    """
    
    can_reopen: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReopen') }})
    opening_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openingDate') }})
    status: Optional[OpenInfoStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
