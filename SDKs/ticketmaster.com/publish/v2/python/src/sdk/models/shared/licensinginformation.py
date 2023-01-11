import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionrestrictions as shared_regionrestrictions


@dataclass_json
@dataclasses.dataclass
class LicensingInformation:
    r"""LicensingInformation
    This class defines an entitlement data on the Publish API
    """
    
    license: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    region_restriction: Optional[shared_regionrestrictions.RegionRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionRestriction') }})
    
