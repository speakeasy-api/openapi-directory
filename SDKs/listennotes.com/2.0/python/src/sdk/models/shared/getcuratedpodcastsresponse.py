import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import curatedlistsimple as shared_curatedlistsimple


@dataclass_json
@dataclasses.dataclass
class GetCuratedPodcastsResponse:
    curated_lists: list[shared_curatedlistsimple.CuratedListSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('curated_lists') }})
    has_next: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_next') }})
    has_previous: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_previous') }})
    next_page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_number') }})
    page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    previous_page_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_number') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
