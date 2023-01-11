import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import siteverificationwebresourceresource as shared_siteverificationwebresourceresource


@dataclass_json
@dataclasses.dataclass
class SiteVerificationWebResourceListResponse:
    items: Optional[list[shared_siteverificationwebresourceresource.SiteVerificationWebResourceResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
