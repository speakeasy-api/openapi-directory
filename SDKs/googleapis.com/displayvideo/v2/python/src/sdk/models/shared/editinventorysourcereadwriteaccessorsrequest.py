import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import editinventorysourcereadwriteaccessorsrequestadvertisersupdate as shared_editinventorysourcereadwriteaccessorsrequestadvertisersupdate


@dataclass_json
@dataclasses.dataclass
class EditInventorySourceReadWriteAccessorsRequest:
    r"""EditInventorySourceReadWriteAccessorsRequest
    Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
    """
    
    advertisers_update: Optional[shared_editinventorysourcereadwriteaccessorsrequestadvertisersupdate.EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisersUpdate') }})
    assign_partner: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPartner') }})
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
