import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Thumbnail:
    r"""Thumbnail
    Image thumbnail information
    """
    
    height: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
