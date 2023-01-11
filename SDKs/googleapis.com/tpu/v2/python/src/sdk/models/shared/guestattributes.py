import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestattributesvalue as shared_guestattributesvalue


@dataclass_json
@dataclasses.dataclass
class GuestAttributes:
    r"""GuestAttributes
    A guest attributes.
    """
    
    query_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryPath') }})
    query_value: Optional[shared_guestattributesvalue.GuestAttributesValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryValue') }})
    
