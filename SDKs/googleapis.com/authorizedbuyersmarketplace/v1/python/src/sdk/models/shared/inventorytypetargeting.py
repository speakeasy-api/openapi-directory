"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class InventoryTypeTargetingInventoryTypesEnum(str, Enum):
    INVENTORY_TYPE_UNSPECIFIED = 'INVENTORY_TYPE_UNSPECIFIED'
    BROWSER = 'BROWSER'
    MOBILE_APP = 'MOBILE_APP'
    VIDEO_PLAYER = 'VIDEO_PLAYER'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InventoryTypeTargeting:
    r"""Targeting of the inventory types a bid request can originate from."""
    
    inventory_types: Optional[list[InventoryTypeTargetingInventoryTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('inventoryTypes'), 'exclude': lambda f: f is None }})
    r"""The list of targeted inventory types for the bid request."""  
    