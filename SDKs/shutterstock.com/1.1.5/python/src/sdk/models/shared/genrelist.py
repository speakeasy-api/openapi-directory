import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GenreList:
    r"""GenreList
    List of audio genres
    """
    
    data: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
