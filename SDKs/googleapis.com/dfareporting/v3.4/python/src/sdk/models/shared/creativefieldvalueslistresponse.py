import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativefieldvalue as shared_creativefieldvalue


@dataclass_json
@dataclasses.dataclass
class CreativeFieldValuesListResponse:
    r"""CreativeFieldValuesListResponse
    Creative Field Value List Response
    """
    
    creative_field_values: Optional[list[shared_creativefieldvalue.CreativeFieldValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeFieldValues') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
