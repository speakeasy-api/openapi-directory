import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobileapplicationtargeting as shared_mobileapplicationtargeting
from ..shared import uritargeting as shared_uritargeting


@dataclass_json
@dataclasses.dataclass
class PlacementTargeting:
    r"""PlacementTargeting
    Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
    """
    
    mobile_application_targeting: Optional[shared_mobileapplicationtargeting.MobileApplicationTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApplicationTargeting') }})
    uri_targeting: Optional[shared_uritargeting.URITargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriTargeting') }})
    
