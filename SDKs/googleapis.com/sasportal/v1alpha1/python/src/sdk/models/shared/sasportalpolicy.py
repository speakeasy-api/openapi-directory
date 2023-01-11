import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sasportalassignment as shared_sasportalassignment


@dataclass_json
@dataclasses.dataclass
class SasPortalPolicy:
    r"""SasPortalPolicy
    Defines an access control policy to the resources.
    """
    
    assignments: Optional[list[shared_sasportalassignment.SasPortalAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignments') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
