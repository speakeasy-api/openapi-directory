import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DomainMembership:
    r"""DomainMembership
    A Google Workspace Domain membership.
    """
    
    in_viewer_domain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inViewerDomain') }})
    
