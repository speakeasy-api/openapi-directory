import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterview as shared_filterview


@dataclass_json
@dataclasses.dataclass
class UpdateFilterViewRequest:
    r"""UpdateFilterViewRequest
    Updates properties of the filter view.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    filter: Optional[shared_filterview.FilterView] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
