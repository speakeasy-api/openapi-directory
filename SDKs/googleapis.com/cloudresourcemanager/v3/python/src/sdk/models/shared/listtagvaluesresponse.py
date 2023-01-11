import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagvalue as shared_tagvalue


@dataclass_json
@dataclasses.dataclass
class ListTagValuesResponse:
    r"""ListTagValuesResponse
    The ListTagValues response.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tag_values: Optional[list[shared_tagvalue.TagValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    
