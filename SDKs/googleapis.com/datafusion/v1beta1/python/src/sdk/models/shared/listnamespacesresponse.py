import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namespace as shared_namespace


@dataclass_json
@dataclasses.dataclass
class ListNamespacesResponse:
    r"""ListNamespacesResponse
    List namespaces response.
    """
    
    namespaces: Optional[list[shared_namespace.Namespace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
