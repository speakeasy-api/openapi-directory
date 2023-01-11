import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import presale as shared_presale
from ..shared import publicsaledates as shared_publicsaledates


@dataclass_json
@dataclasses.dataclass
class EventSalesDates:
    r"""EventSalesDates
    Event's Sales Dates
    """
    
    presales: Optional[list[shared_presale.Presale]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presales') }})
    public: Optional[shared_publicsaledates.PublicSaleDates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    
