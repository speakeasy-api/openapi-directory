import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativefield as shared_creativefield


@dataclass_json
@dataclasses.dataclass
class CreativeFieldsListResponse:
    r"""CreativeFieldsListResponse
    Creative Field List Response
    """
    
    creative_fields: Optional[list[shared_creativefield.CreativeField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeFields') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
