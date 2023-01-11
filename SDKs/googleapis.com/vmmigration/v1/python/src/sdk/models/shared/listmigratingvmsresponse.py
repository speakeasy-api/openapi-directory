import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import migratingvm as shared_migratingvm


@dataclass_json
@dataclasses.dataclass
class ListMigratingVmsResponse:
    r"""ListMigratingVmsResponse
    Response message for 'ListMigratingVms' request.
    """
    
    migrating_vms: Optional[list[shared_migratingvm.MigratingVM]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('migratingVms') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
