import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GuaranteedOrderStatusConfigStatusEnum(str, Enum):
    GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED = "GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    COMPLETED = "COMPLETED"

class GuaranteedOrderStatusEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclasses.dataclass
class GuaranteedOrderStatus:
    r"""GuaranteedOrderStatus
    The status settings of the guaranteed order.
    """
    
    config_status: Optional[GuaranteedOrderStatusConfigStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configStatus') }})
    entity_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityPauseReason') }})
    entity_status: Optional[GuaranteedOrderStatusEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class GuaranteedOrderStatusInput:
    r"""GuaranteedOrderStatusInput
    The status settings of the guaranteed order.
    """
    
    entity_pause_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityPauseReason') }})
    entity_status: Optional[GuaranteedOrderStatusEntityStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    
