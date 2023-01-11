import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensiongroup as shared_dimensiongroup


@dataclass_json
@dataclasses.dataclass
class UpdateDimensionGroupRequest:
    r"""UpdateDimensionGroupRequest
    Updates the state of the specified group.
    """
    
    dimension_group: Optional[shared_dimensiongroup.DimensionGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionGroup') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
