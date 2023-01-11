import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectedrange as shared_protectedrange


@dataclass_json
@dataclasses.dataclass
class UpdateProtectedRangeRequest:
    r"""UpdateProtectedRangeRequest
    Updates an existing protected range with the specified protectedRangeId.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    protected_range: Optional[shared_protectedrange.ProtectedRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRange') }})
    
