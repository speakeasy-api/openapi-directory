import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creative as shared_creative


@dataclass_json
@dataclasses.dataclass
class CreativesListResponse:
    r"""CreativesListResponse
    Creative List Response
    """
    
    creatives: Optional[list[shared_creative.Creative]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatives') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
