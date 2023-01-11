import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createitemrequest as shared_createitemrequest
from ..shared import deleteitemrequest as shared_deleteitemrequest
from ..shared import moveitemrequest as shared_moveitemrequest
from ..shared import updateforminforequest as shared_updateforminforequest
from ..shared import updateitemrequest as shared_updateitemrequest
from ..shared import updatesettingsrequest as shared_updatesettingsrequest


@dataclass_json
@dataclasses.dataclass
class RequestInput:
    r"""RequestInput
    The kinds of update requests that can be made.
    """
    
    create_item: Optional[shared_createitemrequest.CreateItemRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createItem') }})
    delete_item: Optional[shared_deleteitemrequest.DeleteItemRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteItem') }})
    move_item: Optional[shared_moveitemrequest.MoveItemRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveItem') }})
    update_form_info: Optional[shared_updateforminforequest.UpdateFormInfoRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFormInfo') }})
    update_item: Optional[shared_updateitemrequest.UpdateItemRequestInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateItem') }})
    update_settings: Optional[shared_updatesettingsrequest.UpdateSettingsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSettings') }})
    
