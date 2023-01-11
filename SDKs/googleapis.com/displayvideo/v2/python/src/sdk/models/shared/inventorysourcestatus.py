import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InventorySourceStatusConfigStatusEnum(str, Enum):
    INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED = "INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED"
    INVENTORY_SOURCE_CONFIG_STATUS_PENDING = "INVENTORY_SOURCE_CONFIG_STATUS_PENDING"
    INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED = "INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED"

class InventorySourceStatusEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"

class InventorySourceStatusSellerStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclasses.dataclass
class InventorySourceStatus:
    r"""InventorySourceStatus
    The status related settings of the inventory source.
    """
    
    config_status: Optional[InventorySourceStatusConfigStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configStatus') }})
    entity_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityPauseReason') }})
    entity_status: Optional[InventorySourceStatusEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    seller_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerPauseReason') }})
    seller_status: Optional[InventorySourceStatusSellerStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class InventorySourceStatusInput:
    r"""InventorySourceStatusInput
    The status related settings of the inventory source.
    """
    
    entity_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityPauseReason') }})
    entity_status: Optional[InventorySourceStatusEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    
