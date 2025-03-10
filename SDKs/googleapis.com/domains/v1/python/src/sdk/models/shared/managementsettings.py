"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class ManagementSettingsTransferLockStateEnum(str, Enum):
    r"""Controls whether the domain can be transferred to another registrar."""
    TRANSFER_LOCK_STATE_UNSPECIFIED = 'TRANSFER_LOCK_STATE_UNSPECIFIED'
    UNLOCKED = 'UNLOCKED'
    LOCKED = 'LOCKED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ManagementSettingsInput:
    r"""Defines renewal, billing, and transfer settings for a `Registration`."""
    
    transfer_lock_state: Optional[ManagementSettingsTransferLockStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transferLockState'), 'exclude': lambda f: f is None }})
    r"""Controls whether the domain can be transferred to another registrar."""  
    
class ManagementSettingsRenewalMethodEnum(str, Enum):
    r"""Output only. The renewal method for this `Registration`."""
    RENEWAL_METHOD_UNSPECIFIED = 'RENEWAL_METHOD_UNSPECIFIED'
    AUTOMATIC_RENEWAL = 'AUTOMATIC_RENEWAL'
    MANUAL_RENEWAL = 'MANUAL_RENEWAL'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ManagementSettings:
    r"""Defines renewal, billing, and transfer settings for a `Registration`."""
    
    renewal_method: Optional[ManagementSettingsRenewalMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('renewalMethod'), 'exclude': lambda f: f is None }})
    r"""Output only. The renewal method for this `Registration`."""  
    transfer_lock_state: Optional[ManagementSettingsTransferLockStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('transferLockState'), 'exclude': lambda f: f is None }})
    r"""Controls whether the domain can be transferred to another registrar."""  
    