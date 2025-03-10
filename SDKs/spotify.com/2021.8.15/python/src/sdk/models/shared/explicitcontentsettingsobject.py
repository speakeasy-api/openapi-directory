import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExplicitContentSettingsObject:
    r"""ExplicitContentSettingsObject

    https://developer.spotify.com/documentation/web-api/reference/#object-explicitcontentsettingsobject - Find more info on the official Spotify Web API Reference
    """
    
    filter_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_enabled') }})
    filter_locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter_locked') }})
    
