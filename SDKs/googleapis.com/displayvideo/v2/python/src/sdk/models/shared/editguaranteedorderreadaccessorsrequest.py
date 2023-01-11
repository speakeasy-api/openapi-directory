import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EditGuaranteedOrderReadAccessorsRequest:
    r"""EditGuaranteedOrderReadAccessorsRequest
    Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
    """
    
    added_advertisers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedAdvertisers') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    read_access_inherited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readAccessInherited') }})
    removed_advertisers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedAdvertisers') }})
    
