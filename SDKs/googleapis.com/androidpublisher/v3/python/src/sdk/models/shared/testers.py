import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Testers:
    r"""Testers
    The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.
    """
    
    google_groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleGroups') }})
    
