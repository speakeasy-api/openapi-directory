import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import genre as shared_genre


@dataclass_json
@dataclasses.dataclass
class GetGenresResponse:
    genres: list[shared_genre.Genre] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    
