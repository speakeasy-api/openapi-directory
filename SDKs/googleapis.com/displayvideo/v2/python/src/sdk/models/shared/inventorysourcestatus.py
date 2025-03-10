"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class InventorySourceStatusEntityStatusEnum(str, Enum):
    r"""Whether or not the inventory source is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`."""
    ENTITY_STATUS_UNSPECIFIED = 'ENTITY_STATUS_UNSPECIFIED'
    ENTITY_STATUS_ACTIVE = 'ENTITY_STATUS_ACTIVE'
    ENTITY_STATUS_ARCHIVED = 'ENTITY_STATUS_ARCHIVED'
    ENTITY_STATUS_DRAFT = 'ENTITY_STATUS_DRAFT'
    ENTITY_STATUS_PAUSED = 'ENTITY_STATUS_PAUSED'
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InventorySourceStatusInput:
    r"""The status related settings of the inventory source."""
    
    entity_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('entityPauseReason'), 'exclude': lambda f: f is None }})
    r"""The user-provided reason for pausing this inventory source. Must not exceed 100 characters. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`."""  
    entity_status: Optional[InventorySourceStatusEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('entityStatus'), 'exclude': lambda f: f is None }})
    r"""Whether or not the inventory source is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`."""  
    
class InventorySourceStatusConfigStatusEnum(str, Enum):
    r"""Output only. The configuration status of the inventory source. Only applicable for guaranteed inventory sources. Acceptable values are `INVENTORY_SOURCE_CONFIG_STATUS_PENDING` and `INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED`. An inventory source must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve."""
    INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED = 'INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED'
    INVENTORY_SOURCE_CONFIG_STATUS_PENDING = 'INVENTORY_SOURCE_CONFIG_STATUS_PENDING'
    INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED = 'INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED'

class InventorySourceStatusSellerStatusEnum(str, Enum):
    r"""Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are `ENTITY_STATUS_ACTIVE` and `ENTITY_STATUS_PAUSED`."""
    ENTITY_STATUS_UNSPECIFIED = 'ENTITY_STATUS_UNSPECIFIED'
    ENTITY_STATUS_ACTIVE = 'ENTITY_STATUS_ACTIVE'
    ENTITY_STATUS_ARCHIVED = 'ENTITY_STATUS_ARCHIVED'
    ENTITY_STATUS_DRAFT = 'ENTITY_STATUS_DRAFT'
    ENTITY_STATUS_PAUSED = 'ENTITY_STATUS_PAUSED'
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InventorySourceStatus:
    r"""The status related settings of the inventory source."""
    
    config_status: Optional[InventorySourceStatusConfigStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('configStatus'), 'exclude': lambda f: f is None }})
    r"""Output only. The configuration status of the inventory source. Only applicable for guaranteed inventory sources. Acceptable values are `INVENTORY_SOURCE_CONFIG_STATUS_PENDING` and `INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED`. An inventory source must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve."""  
    entity_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('entityPauseReason'), 'exclude': lambda f: f is None }})
    r"""The user-provided reason for pausing this inventory source. Must not exceed 100 characters. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`."""  
    entity_status: Optional[InventorySourceStatusEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('entityStatus'), 'exclude': lambda f: f is None }})
    r"""Whether or not the inventory source is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`."""  
    seller_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sellerPauseReason'), 'exclude': lambda f: f is None }})
    r"""Output only. The seller-provided reason for pausing this inventory source. Only applicable for inventory sources synced directly from the publishers and when seller_status is set to `ENTITY_STATUS_PAUSED`."""  
    seller_status: Optional[InventorySourceStatusSellerStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sellerStatus'), 'exclude': lambda f: f is None }})
    r"""Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are `ENTITY_STATUS_ACTIVE` and `ENTITY_STATUS_PAUSED`."""  
    