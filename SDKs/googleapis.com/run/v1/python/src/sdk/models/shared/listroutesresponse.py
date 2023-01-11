import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import route as shared_route
from ..shared import listmeta as shared_listmeta


@dataclass_json
@dataclasses.dataclass
class ListRoutesResponse:
    r"""ListRoutesResponse
    ListRoutesResponse is a list of Route resources.
    """
    
    api_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    items: Optional[list[shared_route.Route]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[shared_listmeta.ListMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
