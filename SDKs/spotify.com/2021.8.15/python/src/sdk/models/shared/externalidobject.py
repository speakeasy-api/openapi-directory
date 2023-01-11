import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExternalIDObject:
    r"""ExternalIDObject

    https://developer.spotify.com/documentation/web-api/reference/#object-externalidobject - Find more info on the official Spotify Web API Reference
    """
    
    ean: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ean') }})
    isrc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isrc') }})
    upc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upc') }})
    
