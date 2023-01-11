import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import guestunitfeatures as shared_guestunitfeatures


@dataclass_json
@dataclasses.dataclass
class GuestUnitType:
    r"""GuestUnitType
    A specific type of unit primarily defined by its features.
    """
    
    codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codes') }})
    features: Optional[shared_guestunitfeatures.GuestUnitFeatures] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
