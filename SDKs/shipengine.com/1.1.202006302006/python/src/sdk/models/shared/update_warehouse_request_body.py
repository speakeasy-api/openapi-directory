import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address


@dataclass_json
@dataclasses.dataclass
class UpdateWarehouseRequestBodyInput:
    r"""UpdateWarehouseRequestBodyInput
    A warehouse
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    origin_address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_address') }})
    return_address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_address') }})
    
