import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import genre as shared_genre
from ..shared import podcasttypeaheadresult as shared_podcasttypeaheadresult


@dataclass_json
@dataclasses.dataclass
class TypeaheadResponse:
    terms: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    genres: Optional[list[shared_genre.Genre]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    podcasts: Optional[list[shared_podcasttypeaheadresult.PodcastTypeaheadResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcasts') }})
    
