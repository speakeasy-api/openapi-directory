import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate:
    r"""EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate
    Update to the list of advertisers with read/write access to the inventory source.
    """
    
    added_advertisers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedAdvertisers') }})
    removed_advertisers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedAdvertisers') }})
    
