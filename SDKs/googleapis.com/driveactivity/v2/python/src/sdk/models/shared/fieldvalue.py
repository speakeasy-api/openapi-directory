import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import date_ as shared_date_
from ..shared import integer as shared_integer
from ..shared import selection as shared_selection
from ..shared import selectionlist as shared_selectionlist
from ..shared import text as shared_text
from ..shared import textlist as shared_textlist
from ..shared import singleuser as shared_singleuser
from ..shared import userlist as shared_userlist


@dataclass_json
@dataclasses.dataclass
class FieldValue:
    r"""FieldValue
    Contains a value of a Field.
    """
    
    date_: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    integer: Optional[shared_integer.Integer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integer') }})
    selection: Optional[shared_selection.Selection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selection') }})
    selection_list: Optional[shared_selectionlist.SelectionList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionList') }})
    text: Optional[shared_text.Text] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    text_list: Optional[shared_textlist.TextList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textList') }})
    user: Optional[shared_singleuser.SingleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_list: Optional[shared_userlist.UserList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userList') }})
    
