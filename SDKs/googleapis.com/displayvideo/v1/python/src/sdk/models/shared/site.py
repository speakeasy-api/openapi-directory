import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Site:
    r"""Site
    A single site. Sites are apps or websites belonging to a channel.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url_or_app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlOrAppId') }})
    

@dataclass_json
@dataclasses.dataclass
class SiteInput:
    r"""SiteInput
    A single site. Sites are apps or websites belonging to a channel.
    """
    
    url_or_app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlOrAppId') }})
    
