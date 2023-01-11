import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import podcastsimple as shared_podcastsimple


@dataclass_json
@dataclasses.dataclass
class BestPodcastsResponse:
    has_next: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_next') }})
    has_previous: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_previous') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    listennotes_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('listennotes_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_number') }})
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    parent_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    podcasts: list[shared_podcastsimple.PodcastSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcasts') }})
    previous_page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_number') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
