import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestattributesentry as shared_guestattributesentry


@dataclass_json
@dataclasses.dataclass
class GuestAttributesValue:
    r"""GuestAttributesValue
    Array of guest attribute namespace/key/value tuples.
    """
    
    items: Optional[list[shared_guestattributesentry.GuestAttributesEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
