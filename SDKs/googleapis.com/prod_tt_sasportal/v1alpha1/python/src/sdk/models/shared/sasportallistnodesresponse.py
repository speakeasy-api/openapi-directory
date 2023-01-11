import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalnode as shared_sasportalnode


@dataclass_json
@dataclasses.dataclass
class SasPortalListNodesResponse:
    r"""SasPortalListNodesResponse
    Response for ListNodes.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    nodes: Optional[list[shared_sasportalnode.SasPortalNode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
