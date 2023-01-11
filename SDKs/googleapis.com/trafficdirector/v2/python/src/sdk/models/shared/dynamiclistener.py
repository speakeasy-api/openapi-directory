import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiclistenerstate as shared_dynamiclistenerstate
from ..shared import updatefailurestate as shared_updatefailurestate


@dataclass_json
@dataclasses.dataclass
class DynamicListener:
    r"""DynamicListener
    Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
    """
    
    active_state: Optional[shared_dynamiclistenerstate.DynamicListenerState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeState') }})
    draining_state: Optional[shared_dynamiclistenerstate.DynamicListenerState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drainingState') }})
    error_state: Optional[shared_updatefailurestate.UpdateFailureState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorState') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    warming_state: Optional[shared_dynamiclistenerstate.DynamicListenerState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warmingState') }})
    
