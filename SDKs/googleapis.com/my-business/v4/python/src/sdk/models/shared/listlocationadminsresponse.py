import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import admin as shared_admin


@dataclass_json
@dataclasses.dataclass
class ListLocationAdminsResponse:
    r"""ListLocationAdminsResponse
    Response message for AccessControl.ListLocationAdmins.
    """
    
    admins: Optional[list[shared_admin.Admin]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admins') }})
    
