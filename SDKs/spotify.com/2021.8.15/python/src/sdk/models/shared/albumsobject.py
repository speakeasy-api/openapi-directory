import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import albumobject as shared_albumobject


@dataclass_json
@dataclasses.dataclass
class AlbumsObject:
    albums: Optional[list[shared_albumobject.AlbumObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    
