import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namedrange as shared_namedrange


@dataclass_json
@dataclasses.dataclass
class UpdateNamedRangeRequest:
    r"""UpdateNamedRangeRequest
    Updates properties of the named range with the specified namedRangeId.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    named_range: Optional[shared_namedrange.NamedRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRange') }})
    
