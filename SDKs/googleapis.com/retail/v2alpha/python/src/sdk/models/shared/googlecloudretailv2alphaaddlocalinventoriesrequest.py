"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googlecloudretailv2alphalocalinventory as shared_googlecloudretailv2alphalocalinventory
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudRetailV2alphaAddLocalInventoriesRequest:
    r"""Request message for ProductService.AddLocalInventories method."""
    
    add_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('addMask'), 'exclude': lambda f: f is None }})
    r"""Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored."""  
    add_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('addTime'), 'exclude': lambda f: f is None }})
    r"""The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used."""  
    allow_missing: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('allowMissing'), 'exclude': lambda f: f is None }})
    r"""If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found."""  
    local_inventories: Optional[list[shared_googlecloudretailv2alphalocalinventory.GoogleCloudRetailV2alphaLocalInventory]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('localInventories'), 'exclude': lambda f: f is None }})
    r"""Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request."""  
    