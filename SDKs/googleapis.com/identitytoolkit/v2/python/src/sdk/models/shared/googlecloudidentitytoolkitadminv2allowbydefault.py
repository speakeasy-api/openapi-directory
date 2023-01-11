import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2AllowByDefault:
    r"""GoogleCloudIdentitytoolkitAdminV2AllowByDefault
    Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
    """
    
    disallowed_regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowedRegions') }})
    
