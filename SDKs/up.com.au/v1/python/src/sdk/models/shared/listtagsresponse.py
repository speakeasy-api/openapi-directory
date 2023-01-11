import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagresource as shared_tagresource


@dataclass_json
@dataclasses.dataclass
class ListTagsResponseLinks:
    next: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListTagsResponse:
    r"""ListTagsResponse
    Successful response to get all tags. This returns a paginated list of
    tags, which can be scrolled by following the `prev` and `next` links if
    present.
    
    """
    
    data: list[shared_tagresource.TagResource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: ListTagsResponseLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
