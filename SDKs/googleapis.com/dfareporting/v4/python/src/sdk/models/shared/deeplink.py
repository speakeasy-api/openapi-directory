import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mobileapp as shared_mobileapp


@dataclass_json
@dataclasses.dataclass
class DeepLink:
    r"""DeepLink
    Contains information about a landing page deep link.
    """
    
    app_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appUrl') }})
    fallback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallbackUrl') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mobile_app: Optional[shared_mobileapp.MobileApp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApp') }})
    remarketing_list_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remarketingListIds') }})
    
