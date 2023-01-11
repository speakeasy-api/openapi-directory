import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import numerictargetingdimension as shared_numerictargetingdimension
from ..shared import stringtargetingdimension as shared_stringtargetingdimension


@dataclass_json
@dataclasses.dataclass
class AppTargeting:
    r"""AppTargeting
    A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
    """
    
    mobile_app_category_targeting: Optional[shared_numerictargetingdimension.NumericTargetingDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileAppCategoryTargeting') }})
    mobile_app_targeting: Optional[shared_stringtargetingdimension.StringTargetingDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileAppTargeting') }})
    
